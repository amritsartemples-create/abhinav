/* Star Shuffle – Astrologer Akanksha Pande – site scripts */
(function () {
  var WA = "919173629453";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile menu
  var burger = document.getElementById("burger"), mnav = document.getElementById("mnav");
  if (burger && mnav) {
    burger.addEventListener("click", function () {
      var open = mnav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("lock", open);
    });
  }

  // Hero carousel (01.jpg, 02.jpg, 03.jpg)
  var hero = document.getElementById("hero");
  if (hero) {
    var track = hero.querySelector(".track"), slides = track.children, dots = hero.querySelector(".dots");
    var n = slides.length, cur = 0, timer, paused = false, startX = null;
    for (var i = 0; i < n; i++) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Go to slide " + (i + 1));
      b.onclick = (function (k) { return function () { go(k); }; })(i);
      dots.appendChild(b);
    }
    function go(k) {
      cur = (k + n) % n;
      track.style.transform = "translateX(-" + cur * 100 + "%)";
      for (var j = 0; j < n; j++) {
        dots.children[j].classList.toggle("on", j === cur);
        slides[j].setAttribute("aria-hidden", j !== cur);
        slides[j].tabIndex = j === cur ? 0 : -1;
      }
      clearTimeout(timer);
      if (!paused && !reduce) timer = setTimeout(function () { go(cur + 1); }, 5000);
    }
    hero.querySelector(".arrow.l").onclick = function () { go(cur - 1); };
    hero.querySelector(".arrow.r").onclick = function () { go(cur + 1); };
    hero.addEventListener("mouseenter", function () { paused = true; clearTimeout(timer); });
    hero.addEventListener("mouseleave", function () { paused = false; go(cur); });
    hero.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
      startX = null;
    });
    go(0);
  }

  // Testimonials slider
  var tt = document.getElementById("ttrack");
  if (tt) {
    var td = document.getElementById("tdots"), ti;
    function per() { var c = tt.firstElementChild; return Math.max(1, Math.round(tt.clientWidth / c.offsetWidth)); }
    function pages() { return Math.ceil(tt.children.length / per()); }
    function page() { return Math.round(tt.scrollLeft / tt.clientWidth); }
    function mark() { var p = page(); for (var i = 0; i < td.children.length; i++) td.children[i].classList.toggle("on", i === p); }
    function build() {
      td.innerHTML = "";
      for (var i = 0; i < pages(); i++) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Reviews page " + (i + 1));
        b.onclick = (function (k) { return function () { tgo(k); }; })(i);
        td.appendChild(b);
      }
      mark();
    }
    function tgo(p) { var n = pages(); p = (p + n) % n; tt.scrollTo({ left: p * tt.clientWidth }); restart(); }
    function restart() { clearInterval(ti); if (!reduce) ti = setInterval(function () { tgo(page() + 1); }, 6000); }
    document.getElementById("tprev").onclick = function () { tgo(page() - 1); };
    document.getElementById("tnext").onclick = function () { tgo(page() + 1); };
    tt.addEventListener("scroll", function () { clearTimeout(tt._t); tt._t = setTimeout(mark, 80); }, { passive: true });
    tt.addEventListener("mouseenter", function () { clearInterval(ti); });
    tt.addEventListener("mouseleave", restart);
    window.addEventListener("resize", build);
    build();
    restart();
  }

  // YouTube podcast: load the player only when tapped
  document.querySelectorAll(".vbox button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.id + "?autoplay=1&rel=0&playsinline=1";
      f.title = "Astrologer Akanksha Pande podcast";
      f.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      f.allowFullscreen = true;
      btn.parentNode.replaceChild(f, btn);
    });
  });

  // Consultation form -> WhatsApp
  var form = document.getElementById("waForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      function g(k) { return String(f.get(k) || "").trim() || "-"; }
      var msg = "New Consultation Request\nName: " + g("name") + "\nPhone: " + g("phone") + "\nEmail: " + g("email") + "\nSubject: " + g("subject") + "\nProblem: " + g("message");
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    });
  }

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
