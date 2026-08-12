(function () {
  var root = document.querySelector('.arcade-embed');
  if (!root) return;

  var fsBtn = root.querySelector('[data-arcade-fs]');
  var fsOpen = false;

  function setFullscreen(on) {
    fsOpen = on;
    root.classList.toggle('is-fullscreen', on);
    document.body.classList.toggle('arcade-fs-open', on);
    if (fsBtn) fsBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  if (fsBtn) {
    fsBtn.addEventListener('click', function () {
      setFullscreen(!fsOpen);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && fsOpen) {
      setFullscreen(false);
      e.preventDefault();
    }
    if ((e.key === 'f' || e.key === 'F') && root.contains(document.activeElement)) {
      setFullscreen(!fsOpen);
      e.preventDefault();
    }
  });
})();
