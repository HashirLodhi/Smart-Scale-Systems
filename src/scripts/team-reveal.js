/* ============================================================
   TEAM REVEAL — Scroll-triggered opening animations
   ============================================================ */

(function () {
  'use strict';

  /* ── Cinematic intro lines ────────────────────────────── */
  var introLines = document.querySelectorAll('.team-cinematic-line');
  var introSub = document.querySelector('.team-cinematic-sub');

  if (introLines.length) {
    var introObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          introObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    introLines.forEach(function (el) {
      introObserver.observe(el);
    });

    if (introSub) {
      var subObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            subObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      subObserver.observe(introSub);
    }
  }

  /* ── Team member rows ─────────────────────────────────── */
  var memberRows = document.querySelectorAll('[data-team-reveal]');

  if (memberRows.length) {
    var memberObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          memberObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    memberRows.forEach(function (row) {
      memberObserver.observe(row);
    });
  }

})();
