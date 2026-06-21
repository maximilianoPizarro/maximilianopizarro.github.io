(function () {
  'use strict';

  const root = document.documentElement;
  const navToggle = document.querySelector('.masthead-toggle');
  const siteNav = document.getElementById('site-nav');
  const themeToggle = document.getElementById('theme-toggle');

  function initTheme() {
    const stored = localStorage.getItem('theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = stored || preferred;
    root.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  initTheme();

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const open = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.tag-filter-toolbar, .filter-toolbar').forEach(function (toolbar) {
    const input = toolbar.querySelector('.tag-filter-input');
    const buttons = toolbar.querySelectorAll('.tag-filter-btn');
    const grid = toolbar.parentElement.querySelector('.content-grid, .videos-grid');

    if (!grid) return;

    let activeTag = '';

    function filterCards() {
      const query = (input ? input.value : '').trim().toLowerCase();
      grid.querySelectorAll('[data-tags]').forEach(function (card) {
        const tags = (card.getAttribute('data-tags') || '').toLowerCase();
        const text = card.textContent.toLowerCase();
        const tagMatch = !activeTag || tags.includes(activeTag);
        const queryMatch = !query || tags.includes(query) || text.includes(query);
        card.classList.toggle('is-hidden', !(tagMatch && queryMatch));
      });
    }

    if (input) {
      input.addEventListener('input', filterCards);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const tag = btn.getAttribute('data-filter-tag');
        if (activeTag === tag) {
          activeTag = '';
          btn.classList.remove('is-active');
        } else {
          activeTag = tag;
          buttons.forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
        }
        filterCards();
      });
    });
  });

  document.querySelectorAll('[data-analytics]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', el.getAttribute('data-analytics'), {
          event_category: 'engagement',
          event_label: el.href || el.textContent
        });
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const search = document.getElementById('header-search') || document.getElementById('search-page-input');
      if (search) search.focus();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.location.href = document.querySelector('[href*="search"]')?.href || '/search/';
    }
  });
})();
