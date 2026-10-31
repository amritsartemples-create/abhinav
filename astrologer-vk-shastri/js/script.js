/* Astrologer V.K Shastri — site script (no dependencies, ~2 KB)
   Replaces Swiper (hero + reviews sliders) and AOS (scroll animations). */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Carousel ---------- */
  function Carousel(root) {
    var track = root.querySelector(".carousel__track");
    var slides = Array.prototype.slice.call(track.children);
    var dotsWrap = root.querySelector(".carousel__dots");
    var prev = root.querySelector(".carousel__nav--prev");
    var next = root.querySelector(".carousel__nav--next");
    var isFade = root.getAttribute("data-effect") === "fade";
    var delay = parseInt(root.getAttribute("data-autoplay"), 10) || 0;
    var index = 0;
    var timer = null;
    var dots = [];

    function perView() {
      if (isFade) return 1;
      return parseInt(getComputedStyle(root).getPropertyValue("--per-view"), 10) || 1;
    }
    function pages() { return Math.max(1, slides.length - perView() + 1); }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      dots = [];
      for (var i = 0; i < pages(); i++) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "carousel__dot";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", "Go to slide " + (i + 1));
        b.addEventListener("click", go.bind(null, i, true));
        dotsWrap.appendChild(b);
        dots.push(b);
      }
    }

    function render() {
      if (isFade) {
        slides.forEach(function (s, i) {
          s.classList.toggle("is-active", i === index);
          s.setAttribute("aria-hidden", i === index ? "false" : "true");
        });
      } else {
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        var w = slides[0].getBoundingClientRect().width + gap;
        track.style.transform = "translate3d(" + (-index * w) + "px,0,0)";
        var pv = perView();
        slides.forEach(function (s, i) {
          s.setAttribute("aria-hidden", i >= index && i < index + pv ? "false" : "true");
        });
      }
      dots.forEach(function (d, i) { d.setAttribute("aria-selected", i === index ? "true" : "false"); });
    }

    function go(i, user) {
      var n = pages();
      index = (i + n) % n;
      render();
      if (user) restart();
    }

    function start() {
      if (!delay || reduceMotion || timer) return;
      timer = setInterval(function () { go(index + 1); }, delay);
    }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    if (prev) prev.addEventListener("click", function () { go(index - 1, true); });
    if (next) next.addEventListener("click", function () { go(index + 1, true); });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });

    // Touch swipe
    var x0 = null, y0 = null;
    root.addEventListener("touchstart", function (e) {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1), true);
      x0 = null;
    }, { passive: true });

    // Keyboard
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") go(index - 1, true);
      if (e.key === "ArrowRight") go(index + 1, true);
    });

    var lastPages = pages();
    window.addEventListener("resize", function () {
      if (pages() !== lastPages) { lastPages = pages(); buildDots(); index = Math.min(index, lastPages - 1); }
      render();
    });

    buildDots();
    render();
    start();
  }

  document.querySelectorAll("[data-carousel]").forEach(function (el) { new Carousel(el); });

  /* ---------- Scroll reveal ---------- */
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0.08 });

    // Small stagger for items that share a grid
    items.forEach(function (el) {
      var sibs = el.parentElement ? el.parentElement.children : [];
      var i = Array.prototype.indexOf.call(sibs, el);
      if (i > 0) el.style.transitionDelay = (Math.min(i, 5) * 80) + "ms";
      io.observe(el);
    });
  }
})();
