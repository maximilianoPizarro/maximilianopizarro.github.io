(function () {
  'use strict';

  let index = null;
  let documents = [];
  const INDEX_URL = (document.querySelector('link[rel="canonical"]')?.href || window.location.origin + '/').replace(/\/$/, '') + '/search-index.json';

  function resolveUrl(url) {
    if (!url) return '#';
    if (url.startsWith('http')) return url;
    const base = window.location.origin;
    return base + (url.startsWith('/') ? url : '/' + url);
  }

  function buildIndex(docs) {
    return lunr(function () {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('description', { boost: 5 });
      this.field('tags', { boost: 8 });
      this.field('type');

      docs.forEach(function (doc) {
        this.add(doc);
      }, this);
    });
  }

  function highlight(text, query) {
    if (!query || !text) return text;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function renderResults(results, query, container) {
    if (!container) return;
    container.innerHTML = '';

    if (!query) {
      container.innerHTML = '<p class="search-hint">Start typing to search projects, operators, charts, and videos.</p>';
      return;
    }

    if (!results.length) {
      container.innerHTML = '<p>No results for <strong>' + query + '</strong>.</p>';
      return;
    }

    const groups = {};
    results.forEach(function (result) {
      const doc = documents.find(function (d) { return d.id === result.ref; });
      if (!doc) return;
      if (!groups[doc.type]) groups[doc.type] = [];
      groups[doc.type].push({ doc: doc, score: result.score });
    });

    const typeLabels = {
      project: 'Projects',
      operator: 'Operators',
      chart: 'Helm Charts',
      video: 'Videos',
      page: 'Pages',
      community: 'Communities'
    };

    Object.keys(groups).forEach(function (type) {
      const section = document.createElement('div');
      section.className = 'search-results__group';
      section.innerHTML = '<h3 class="search-results__group-title">' + (typeLabels[type] || type) + '</h3>';

      groups[type].slice(0, 8).forEach(function (item) {
        const a = document.createElement('a');
        a.className = 'search-result-item';
        a.href = resolveUrl(item.doc.url);
        if (item.doc.url && item.doc.url.startsWith('http')) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }
        a.innerHTML = '<strong>' + highlight(item.doc.title, query) + '</strong><br><span>' + highlight(item.doc.description, query) + '</span>';
        section.appendChild(a);
      });

      container.appendChild(section);
    });

    if (typeof gtag === 'function') {
      gtag('event', 'search', { search_term: query, results_count: results.length });
    }
  }

  function renderHeaderDropdown(results, query) {
    const container = document.getElementById('header-search-results');
    if (!container) return;

    if (!query || query.length < 2) {
      container.hidden = true;
      container.innerHTML = '';
      return;
    }

    container.hidden = false;
    container.innerHTML = '';

    results.slice(0, 6).forEach(function (result) {
      const doc = documents.find(function (d) { return d.id === result.ref; });
      if (!doc) return;
      const a = document.createElement('a');
      a.href = resolveUrl(doc.url);
      if (doc.url && doc.url.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      a.innerHTML = '<span class="result-type">' + doc.type + '</span><br>' + doc.title;
      container.appendChild(a);
    });

    if (!results.length) {
      container.innerHTML = '<span style="display:block;padding:0.75rem;color:#6a6a6a;">No results</span>';
    }
  }

  function search(query) {
    if (!index) return [];
    return index.search(query);
  }

  function debounce(fn, ms) {
    let t;
    return function () {
      const args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(null, args); }, ms);
    };
  }

  function initSearchInput(input, resultsContainer, isPage) {
    if (!input) return;

    const handler = debounce(function () {
      const q = input.value.trim();
      if (q.length < 2 && !isPage) {
        renderHeaderDropdown([], q);
        return;
      }
      const tokenized = q.split(/\s+/).filter(Boolean).map(function (t) { return t + '*'; }).join(' ');
      const results = tokenized ? search(tokenized) : [];
      if (isPage) {
        renderResults(results, q, resultsContainer);
      } else {
        renderHeaderDropdown(results, q);
      }
    }, 200);

    input.addEventListener('input', handler);

    if (!isPage) {
      document.addEventListener('click', function (e) {
        const container = document.getElementById('header-search-results');
        if (container && !input.contains(e.target) && !container.contains(e.target)) {
          container.hidden = true;
        }
      });
    }
  }

  function loadIndex() {
    if (typeof lunr === 'undefined') return;

    fetch('/search-index.json')
      .catch(function () { return fetch('search-index.json'); })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        documents = data.map(function (item, i) {
          return {
            id: String(i),
            title: item.title,
            description: item.description || '',
            url: item.url,
            tags: (item.tags || []).join(' '),
            type: item.type || 'page'
          };
        });
        index = buildIndex(documents);

        initSearchInput(
          document.getElementById('header-search'),
          null,
          false
        );

        const pageInput = document.getElementById('search-page-input');
        initSearchInput(pageInput, document.getElementById('search-results'), true);

        if (pageInput && new URLSearchParams(window.location.search).get('q')) {
          pageInput.value = new URLSearchParams(window.location.search).get('q');
          pageInput.dispatchEvent(new Event('input'));
        }
      })
      .catch(function (err) {
        console.warn('Search index failed to load', err);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIndex);
  } else {
    loadIndex();
  }
})();
