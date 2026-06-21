(function () {
  'use strict';

  const bannerRoot = document.getElementById('mobile-feature-banner');
  const dataEl = document.getElementById('featured-banners-data');

  if (!bannerRoot || !dataEl) return;

  let banners = [];
  try {
    banners = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }

  if (!banners.length) return;

  const mq = window.matchMedia('(max-width: 768px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let intervalId = null;
  let dismissed = sessionStorage.getItem('mobile-banner-dismissed') === '1';

  const titleEl = bannerRoot.querySelector('.mobile-banner__title');
  const descEl = bannerRoot.querySelector('.mobile-banner__description');
  const ctaEl = bannerRoot.querySelector('.mobile-banner__cta');
  const closeBtn = bannerRoot.querySelector('.mobile-banner__close');

  function showRandom() {
    if (dismissed || !mq.matches) {
      bannerRoot.hidden = true;
      return;
    }

    const item = banners[Math.floor(Math.random() * banners.length)];
    titleEl.textContent = item.title;
    descEl.textContent = item.description || '';
    ctaEl.textContent = item.cta || 'Learn more';
    ctaEl.href = item.url || '#';
    if (item.url && item.url.startsWith('http')) {
      ctaEl.target = '_blank';
      ctaEl.rel = 'noopener noreferrer';
    } else {
      ctaEl.removeAttribute('target');
      ctaEl.removeAttribute('rel');
    }
    bannerRoot.hidden = false;
  }

  function startRotation() {
    stopRotation();
    if (reducedMotion.matches) return;
    intervalId = setInterval(showRandom, 8000);
  }

  function stopRotation() {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }

  closeBtn?.addEventListener('click', function () {
    dismissed = true;
    sessionStorage.setItem('mobile-banner-dismissed', '1');
    bannerRoot.hidden = true;
    stopRotation();
  });

  mq.addEventListener('change', function () {
    if (mq.matches) {
      showRandom();
      startRotation();
    } else {
      bannerRoot.hidden = true;
      stopRotation();
    }
  });

  if (mq.matches && !dismissed) {
    showRandom();
    startRotation();
  }
})();
