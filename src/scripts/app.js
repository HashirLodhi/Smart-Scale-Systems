/* ============================================================
   SMART SCALE SYSTEMS — SCROLL FRAME ANIMATION ENGINE
   ============================================================
   Technique:
   - Preloads all 122 frames into Image objects
   - Listens to scroll position within the .scroll-section
   - Maps scroll progress [0–1] → frame index [0–121]
   - Draws current frame onto <canvas> each rAF tick
   - Fades out hero copy as scroll begins
   ============================================================ */

(function () {
  'use strict';

  /* ── CONFIG ─────────────────────────────────────────────── */
  const TOTAL_FRAMES = 122;
  const FRAME_DIR    = '/src/assets/frames/';  // absolute path from root
  const FRAME_PREFIX = 'frame_';
  const FRAME_EXT    = '.png';
  const PAD          = 4;                  // zero-padding digits (0001)

  /* ── ELEMENTS ───────────────────────────────────────────── */
  const canvas       = document.getElementById('heroCanvas');
  const ctx          = canvas.getContext('2d');
  const scrollSec    = document.getElementById('scrollSection');
  const heroOverlay  = document.getElementById('heroOverlay');
  const scrollHint   = document.getElementById('scrollHint');
  const progressFill = document.getElementById('progressFill');
  const frameNumEl   = document.getElementById('frameNum');
  let   nav          = null;

  /* ── STATE ──────────────────────────────────────────────── */
  const frames       = [];
  let   loadedCount  = 0;
  let   currentFrame = 0;
  let   targetFrame  = 0;
  let   rafId        = null;

  /* ── LOADING SCREEN ─────────────────────────────────────── */
  const loadingScreen = createLoadingScreen();

  /* ── CANVAS SIZING ──────────────────────────────────────── */
  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(currentFrame);
  }

  /* ── FRAME FILENAME ─────────────────────────────────────── */
  function frameSrc(index) {
    const n = String(index + 1).padStart(PAD, '0');
    return `${FRAME_DIR}${FRAME_PREFIX}${n}${FRAME_EXT}`;
  }

  /* ── DRAW ONE FRAME ─────────────────────────────────────── */
  function drawFrame(index) {
    const img = frames[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Clear
    ctx.clearRect(0, 0, cw, ch);

    // Background
    ctx.fillStyle = '#FDF6ED';
    ctx.fillRect(0, 0, cw, ch);

    // Draw image — object-contain style (letterbox/pillarbox)
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
  }

  /* ── PRELOAD ALL FRAMES ─────────────────────────────────── */
  function preloadFrames() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img  = new Image();
      img.src    = frameSrc(i);
      img.onload = () => {
        loadedCount++;
        updateLoadingBar(loadedCount / TOTAL_FRAMES);

        // Draw first frame as soon as it loads
        if (i === 0) {
          resizeCanvas();
          drawFrame(0);
        }

        if (loadedCount === TOTAL_FRAMES) {
          onAllLoaded();
        }
      };
      img.onerror = () => {
        loadedCount++;
        updateLoadingBar(loadedCount / TOTAL_FRAMES);
        if (loadedCount === TOTAL_FRAMES) onAllLoaded();
      };
      frames[i] = img;
    }
  }

  /* ── ALL FRAMES LOADED ──────────────────────────────────── */
  function onAllLoaded() {
    // Hide loading screen
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => loadingScreen.remove(), 700);
    }, 300);

    // Start render loop
    startRenderLoop();
  }

  /* ── SCROLL → FRAME MAPPING ─────────────────────────────── */
  function getScrollProgress() {
    const rect  = scrollSec.getBoundingClientRect();
    const total = scrollSec.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;  // positive once section enters
    return Math.max(0, Math.min(1, scrolled / total));
  }

  /* ── RENDER LOOP ─────────────────────────────────────────── */
  function startRenderLoop() {
    function tick() {
      const progress = getScrollProgress();
      const frameIdx = Math.round(progress * (TOTAL_FRAMES - 1));

      // Only redraw if frame changed
      if (frameIdx !== currentFrame) {
        currentFrame = frameIdx;
        drawFrame(currentFrame);
      }

      // Update UI
      updateUI(progress, frameIdx);

      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }

  /* ── UPDATE UI ───────────────────────────────────────────── */
  function updateUI(progress, frameIdx) {
    // Progress bar
    progressFill.style.width = (progress * 100) + '%';

    // Frame counter
    frameNumEl.textContent = String(frameIdx + 1).padStart(2, '0');

    // Hero overlay — fade out as we scroll
    const overlayOpacity = Math.max(0, 1 - progress * 4);
    heroOverlay.style.opacity  = overlayOpacity;
    heroOverlay.style.transform = `translateY(${-progress * 40}px)`;

    // Scroll hint
    if (progress > 0.02) {
      scrollHint.classList.add('hidden');
    } else {
      scrollHint.classList.remove('hidden');
    }

    // Nav background
    if (!nav) nav = document.getElementById('nav');
    if (nav) {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }

  /* ── LOADING SCREEN BUILDER ─────────────────────────────── */
  function createLoadingScreen() {
    const el = document.createElement('div');
    el.className = 'loading-screen';
    el.innerHTML = `
      <div class="loading-logo">Smart Scale <em>Systems</em></div>
      <div class="loading-bar-wrap">
        <div class="loading-bar-fill" id="loadingBar"></div>
      </div>
      <div class="loading-pct" id="loadingPct">Loading frames… 0%</div>
    `;
    document.body.appendChild(el);
    return el;
  }

  function updateLoadingBar(ratio) {
    const bar = document.getElementById('loadingBar');
    const pct = document.getElementById('loadingPct');
    if (bar) bar.style.width = (ratio * 100).toFixed(0) + '%';
    if (pct) pct.textContent = `Loading frames… ${(ratio * 100).toFixed(0)}%`;
  }

  /* ── INIT ───────────────────────────────────────────────── */
  function init() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw cream background immediately
    ctx.fillStyle = '#FDF6ED';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    preloadFrames();
  }

  // Kick off after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ── HOME PAGE SCROLL REVEAL ─────────────────────────── */
(function () {
  'use strict';
  var items = document.querySelectorAll('.reveal-on-scroll');
  if (!items.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });
})();

/* ── SECTION HEADER REVEAL ───────────────────────────── */
(function () {
  'use strict';
  var items = document.querySelectorAll('[data-section-reveal]');
  if (!items.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

  items.forEach(function (el) {
    observer.observe(el);
  });
})();

