(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero slider ---------- */
  var slider = document.querySelector(".slider");
  if (slider) {
    var track = slider.querySelector(".slider__track");
    var slides = track.children;
    var dotsWrap = slider.querySelector(".slider__dots");
    var count = slides.length;
    var index = 0;
    var timer = null;
    var DELAY = 5000;
    var dots = [];

    for (var i = 0; i < count; i++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Slide " + (i + 1));
      dot.addEventListener("click", goTo.bind(null, i));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    }

    function goTo(n) {
      index = (n + count) % count;
      track.style.transform = "translateX(" + -index * 100 + "%)";
      for (var j = 0; j < count; j++) {
        dots[j].setAttribute("aria-selected", j === index ? "true" : "false");
        slides[j].setAttribute("aria-hidden", j === index ? "false" : "true");
        slides[j].tabIndex = j === index ? 0 : -1;
      }
    }

    function start() {
      if (reduceMotion || timer) return;
      timer = setInterval(function () { goTo(index + 1); }, DELAY);
    }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    slider.querySelector(".slider__btn--prev").addEventListener("click", function () { goTo(index - 1); restart(); });
    slider.querySelector(".slider__btn--next").addEventListener("click", function () { goTo(index + 1); restart(); });
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });

    // swipe
    var startX = 0, startY = 0, dragging = false, moved = false;
    track.addEventListener("pointerdown", function (e) {
      dragging = true; moved = false; startX = e.clientX; startY = e.clientY; stop();
    });
    window.addEventListener("pointerup", function (e) {
      if (!dragging) return;
      dragging = false;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(e.clientY - startY)) {
        moved = true;
        goTo(index + (dx < 0 ? 1 : -1));
      }
      start();
    });
    // don't trigger the call link after a swipe
    track.addEventListener("click", function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
    track.addEventListener("dragstart", function (e) { e.preventDefault(); });

    goTo(0);
    start();
  }

  /* ---------- Counters ---------- */
  var nums = document.querySelectorAll("[data-count]");
  if (nums.length && "IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        var el = entry.target;
        var end = +el.getAttribute("data-count");
        var t0 = null;
        function step(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1800, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + "+";
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  }
})();
