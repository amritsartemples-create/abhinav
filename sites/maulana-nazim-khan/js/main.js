// Dependency-free carousel + stat counters (replaces jQuery, Bootstrap JS and Owl Carousel)
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function Carousel(root) {
    this.root = root;
    this.track = root.querySelector('.carousel__track');
    this.slides = Array.prototype.slice.call(this.track.children);
    this.count = this.slides.length;
    this.interval = parseInt(root.getAttribute('data-interval'), 10) || 5000;
    this.index = this.count; // first real slide sits after the leading clones
    this.timer = null;
    if (this.count < 2) return;

    this.cloneSlides();
    this.buildControls();
    this.bindEvents();
    this.go(this.index, false);
    this.play();
  }

  // Clone the full set before and after so looping is seamless at any per-view count
  Carousel.prototype.cloneSlides = function () {
    var self = this;
    var before = document.createDocumentFragment();
    var after = document.createDocumentFragment();
    this.slides.forEach(function (slide, i) {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', (i + 1) + ' of ' + self.count);
      [before, after].forEach(function (frag) {
        var clone = slide.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('inert', '');
        clone.querySelectorAll('img').forEach(function (img) {
          img.setAttribute('loading', 'lazy');
          img.removeAttribute('fetchpriority');
        });
        frag.appendChild(clone);
      });
    });
    this.track.insertBefore(before, this.track.firstChild);
    this.track.appendChild(after);
  };

  Carousel.prototype.buildControls = function () {
    var self = this;
    if (this.root.hasAttribute('data-arrows')) {
      [['prev', 'Previous slide', -1], ['next', 'Next slide', 1]].forEach(function (cfg) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'carousel__arrow carousel__arrow--' + cfg[0];
        btn.setAttribute('aria-label', cfg[1]);
        btn.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-' + cfg[0] + '"/></svg>';
        btn.addEventListener('click', function () { self.go(self.index + cfg[2]); self.restart(); });
        self.root.appendChild(btn);
      });
    }
    var dots = document.createElement('div');
    dots.className = 'carousel__dots';
    this.dots = [];
    for (var i = 0; i < this.count; i++) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel__dot';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', this.go.bind(this, this.count + i, true));
      dot.addEventListener('click', this.restart.bind(this));
      dots.appendChild(dot);
      this.dots.push(dot);
    }
    this.root.appendChild(dots);
  };

  Carousel.prototype.offsetFor = function (index) {
    var slide = this.track.children[index];
    return slide ? slide.offsetLeft : 0;
  };

  Carousel.prototype.go = function (index, animate) {
    this.index = index;
    this.track.classList.toggle('no-anim', animate === false);
    this.track.style.transform = 'translate3d(' + -this.offsetFor(index) + 'px,0,0)';
    var real = ((index - this.count) % this.count + this.count) % this.count;
    this.dots.forEach(function (dot, i) {
      if (i === real) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (animate === false) {
      void this.track.offsetWidth; // flush so the next move animates again
      this.track.classList.remove('no-anim');
    }
  };

  // After landing on a clone, jump silently to the matching real slide
  Carousel.prototype.normalize = function () {
    if (this.index >= this.count * 2) this.go(this.index - this.count, false);
    else if (this.index < this.count) this.go(this.index + this.count, false);
  };

  Carousel.prototype.play = function () {
    if (reduceMotion || this.timer) return;
    var self = this;
    this.timer = setInterval(function () { self.go(self.index + 1); }, this.interval);
  };

  Carousel.prototype.pause = function () {
    clearInterval(this.timer);
    this.timer = null;
  };

  Carousel.prototype.restart = function () {
    this.pause();
    this.play();
  };

  Carousel.prototype.bindEvents = function () {
    var self = this;
    var track = this.track;
    var startX = 0;
    var startY = 0;
    var dx = 0;
    var dragging = false;
    var base = 0;

    track.addEventListener('transitionend', function (e) {
      if (e.target === track) self.normalize();
    });

    this.root.addEventListener('mouseenter', this.pause.bind(this));
    this.root.addEventListener('mouseleave', this.play.bind(this));
    this.root.addEventListener('focusin', this.pause.bind(this));
    this.root.addEventListener('focusout', this.play.bind(this));
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) self.pause(); else self.play();
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { self.go(self.index, false); }, 120);
    });

    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      self.normalize();
      dragging = true;
      dx = 0;
      startX = e.clientX;
      startY = e.clientY;
      base = -self.offsetFor(self.index);
      self.pause();
    });

    track.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      dx = e.clientX - startX;
      if (Math.abs(dx) < Math.abs(e.clientY - startY)) return;
      if (Math.abs(dx) > 6) {
        track.classList.add('is-dragging');
        if (!track.hasPointerCapture(e.pointerId)) track.setPointerCapture(e.pointerId);
      }
      track.style.transform = 'translate3d(' + (base + dx) + 'px,0,0)';
    });

    function end() {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
      if (Math.abs(dx) > 50) self.go(self.index + (dx < 0 ? 1 : -1));
      else self.go(self.index);
      self.play();
    }

    track.addEventListener('dragstart', function (e) { e.preventDefault(); });
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);

    // A drag should not also follow the slide's link
    track.addEventListener('click', function (e) {
      if (Math.abs(dx) > 6) { e.preventDefault(); dx = 0; }
    }, true);
  };

  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window) || reduceMotion) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / 1600, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  document.querySelectorAll('[data-carousel]').forEach(function (el) { new Carousel(el); });
  initCounters();
})();
