(function(){
  var menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks");
  function setMenu(open){navLinks.classList.toggle("active",open);menuBtn.textContent=open?"×":"☰";menuBtn.setAttribute("aria-expanded",open)}
  menuBtn.addEventListener("click",function(){setMenu(!navLinks.classList.contains("active"))});
  navLinks.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){setMenu(false)})});

  // Hero carousel (01, 02, 03)
  var slider=document.getElementById("slider");
  if(slider){
    var slides=slider.querySelectorAll(".slide"),dots=slider.querySelector(".dots"),i=0,t;
    slides.forEach(function(_,n){var b=document.createElement("button");b.setAttribute("aria-label","Slide "+(n+1));b.addEventListener("click",function(){go(n,true)});dots.appendChild(b)});
    function go(n,user){
      slides[i].classList.remove("active");dots.children[i].classList.remove("on");
      i=(n+slides.length)%slides.length;
      slides[i].classList.add("active");dots.children[i].classList.add("on");
      if(user)play();
    }
    function play(){clearInterval(t);t=setInterval(function(){go(i+1)},4500)}
    slider.querySelector(".prev").addEventListener("click",function(){go(i-1,true)});
    slider.querySelector(".next").addEventListener("click",function(){go(i+1,true)});
    var x=0;
    slider.addEventListener("touchstart",function(e){x=e.touches[0].clientX},{passive:true});
    slider.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-x;if(Math.abs(d)>40)go(i+(d<0?1:-1),true)});
    slider.addEventListener("mouseenter",function(){clearInterval(t)});
    slider.addEventListener("mouseleave",play);
    dots.children[0].classList.add("on");play();
  }

  // Service cards scroll animation
  var cards=document.querySelectorAll(".animate-service");
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("show-service");io.unobserve(e.target)}})},{threshold:.15});
    cards.forEach(function(c){io.observe(c)});
  }else cards.forEach(function(c){c.classList.add("show-service")});
  // Reviews slider (3 / 2 / 1 per view)
  var rv=document.getElementById("rvSlider");
  if(rv){
    var track=rv.querySelector(".rv-track"),items=track.children,pos=0,timer;
    function pv(){return window.innerWidth<=640?1:window.innerWidth<=1024?2:3}
    function max(){return Math.max(0,items.length-pv())}
    function show(n){pos=n>max()?0:n<0?max():n;track.style.transform="translateX(-"+(pos*100/pv())+"%)"}
    function auto(){clearInterval(timer);timer=setInterval(function(){show(pos+1)},4500)}
    rv.querySelector(".rv-prev").addEventListener("click",function(){show(pos-1);auto()});
    rv.querySelector(".rv-next").addEventListener("click",function(){show(pos+1);auto()});
    rv.addEventListener("mouseenter",function(){clearInterval(timer)});
    rv.addEventListener("mouseleave",auto);
    var sx=0;
    rv.addEventListener("touchstart",function(e){sx=e.touches[0].clientX},{passive:true});
    rv.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40){show(pos+(d<0?1:-1));auto()}});
    window.addEventListener("resize",function(){show(pos)});
    auto();
  }
})();
