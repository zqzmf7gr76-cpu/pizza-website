(function () {
  const DEFAULT_OPTIONS = {
    offset: 120,         
    delay: 0,            
    duration: 800,       
    easing: 'ease',       
    once: true,         
    mirror: false,        // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'
  };

  function initAOS(options) {
    const opts = Object.assign({}, DEFAULT_OPTIONS, options || {});
    if (window.AOS && typeof window.AOS.init === 'function')  {
      try {
        window.AOS.init(opts);
        console.info('AOS initialized with options:', opts);
      } catch (err) {
        console.error('AOS init error:', err);
      }
    } else {
      console.warn('AOS not found. Make sure you include aos.js before aos-init.js.');
    }
  }

  function refreshAOS(delay = 50) {
    if (!window.AOS || typeof window.AOS.refresh !== 'function') {
      console.warn('AOS.refresh unavailable.');
      return;
    }
    setTimeout(() => {
      try {
        window.AOS.refresh();
        console.info('AOS refreshed');
      } catch (err) {
        console.error('AOS refresh error:', err);
      }
    }, delay);
  }

  function onReady() {
    initAOS();
    window.addEventListener('load', () => {
      refreshAOS(100);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
  window.__niceeAOS = {
    init: initAOS,
    refresh: refreshAOS
  };
})();
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-list');
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('toggle');
    });
