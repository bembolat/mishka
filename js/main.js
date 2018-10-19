var nav = document.querySelector(".main-nav");
var navButton = document.querySelector(".main-nav__toggle");

nav.classList.remove("main-nav--nojs");

navButton.addEventListener("click", function () {
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
  }
  else {
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");
  }
})

