(function () {
  'use strict';

  function loadVideo(wrapper) {
    const id = wrapper.getAttribute('data-youtube-id');
    if (!id || wrapper.dataset.loaded) return;

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
    iframe.title = wrapper.closest('.video-card')?.querySelector('.video-card__title')?.textContent || 'YouTube video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';

    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
    wrapper.dataset.loaded = 'true';
  }

  document.querySelectorAll('.lazy-video .video-card__play').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const wrapper = btn.closest('.lazy-video');
      if (wrapper) loadVideo(wrapper);
    });
  });
})();
