/* ============================================================
   SMART SCALE SYSTEMS — SCROLL REVEAL ANIMATIONS
   ============================================================ */

(function () {
  'use strict';

  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!items.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  items.forEach(function (el, i) {
    // Stagger delay based on position in grid
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });

})();
