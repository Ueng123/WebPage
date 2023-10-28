
// init scroll on F5 pressed
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0,0);

// lock scroll 2 sec when web start
let body = document.querySelector("body");
let sctrack = document.querySelector("::-webkit-scrollbar-track");
body.style.overflowY = "hidden";

setTimeout(function () {
  body.style.overflowY = "scroll";
}, 1250)

// on scroll down, go down one section  .
// and scroll up , go to closest section.
let lY = 0;
window.onscrollend = function () {

  if (window.scrollY > lY) window.scroll(0,
    Math.ceil(window.scrollY / window.innerHeight) * window.innerHeight
  )

  if (window.scrollY < lY) window.scroll(0,
    Math.floor(window.scrollY / window.innerHeight) * window.innerHeight
  )

  lY = window.scrollY;
}