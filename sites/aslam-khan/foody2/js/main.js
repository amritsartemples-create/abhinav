/* Astrologer Aslam Khan Ji – vanilla JS (replaces jQuery, Bootstrap, Owl Carousel, WOW.js) */
(function () {
  "use strict";

  document.documentElement.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hero slider (01.jpg, 02.jpg, 03.jpg)
  document.querySelectorAll("[data-slider]").forEach(function (slider) {
    var track = slider.querySelector(".slider__track");
    var slides = track.children;
    var dotsWrap = slider.querySelector("[data-dots]");
    var delay = parseInt(slider.getAttribute("data-autoplay"), 10) || 5000;
    var index = 0;
    var timer = null;
    var dots = [];

    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      dot.addEventListener("click", go.bind(null, i));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    }

    function go(n) {
      index = (n + slides.length) % slides.length;
      track.style.transform = "translateX(" + index * -100 + "%)";
      dots.forEach(function (d, k) { d.setAttribute("aria-current", k === index ? "true" : "false"); });
      restart();
    }

    function stop() { clearInterval(timer); timer = null; }
    function restart() {
      stop();
      if (!reduceMotion) timer = setInterval(function () { go(index + 1); }, delay);
    }

    slider.querySelector("[data-prev]").addEventListener("click", function () { go(index - 1); });
    slider.querySelector("[data-next]").addEventListener("click", function () { go(index + 1); });
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", restart);
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : restart(); });

    // Swipe
    var startX = null;
    slider.addEventListener("pointerdown", function (e) { startX = e.clientX; });
    slider.addEventListener("pointerup", function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    });

    go(0);
  });

  // Customer review carousel
  document.querySelectorAll("[data-reviews]").forEach(function (wrap) {
    var track = wrap.querySelector("[data-track]");
    var timer = null;

    function step(dir) {
      var card = track.firstElementChild;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      var width = card.getBoundingClientRect().width + gap;
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      var atStart = track.scrollLeft <= 4;
      if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
      else if (dir < 0 && atStart) track.scrollTo({ left: track.scrollWidth });
      else track.scrollBy({ left: dir * width });
    }

    function stop() { clearInterval(timer); timer = null; }
    function start() {
      stop();
      if (!reduceMotion) timer = setInterval(function () { step(1); }, 4500);
    }

    wrap.querySelector("[data-prev]").addEventListener("click", function () { step(-1); start(); });
    wrap.querySelector("[data-next]").addEventListener("click", function () { step(1); start(); });
    wrap.addEventListener("mouseenter", stop);
    wrap.addEventListener("mouseleave", start);
    track.addEventListener("touchstart", stop, { passive: true });
    start();
  });

  // Content protection: block right-click, image drag, copy/cut and dev-tool shortcuts
  var allow = function (el) { return el && el.closest && el.closest("input, textarea"); };
  document.addEventListener("contextmenu", function (e) { if (!allow(e.target)) e.preventDefault(); });
  document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG" || e.target.tagName === "VIDEO") e.preventDefault();
  });
  ["copy", "cut"].forEach(function (ev) {
    document.addEventListener(ev, function (e) { if (!allow(e.target)) e.preventDefault(); });
  });
  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    var c = e.ctrlKey || e.metaKey;
    if (e.key === "F12" ||
        (c && ["u", "s", "p", "c", "a"].indexOf(k) !== -1 && !allow(e.target)) ||
        (c && e.shiftKey && ["i", "j", "c"].indexOf(k) !== -1)) {
      e.preventDefault();
    }
  });
  document.querySelectorAll("video").forEach(function (v) {
    v.setAttribute("controlsList", "nodownload noplaybackrate");
    v.setAttribute("disablePictureInPicture", "");
  });

  // Count-up numbers in "Why Choose Us ?"
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (reduceMotion) return;
    var start = null;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / 1800, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + "+";
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();
