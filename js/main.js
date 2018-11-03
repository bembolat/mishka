var nav = document.querySelector(".main-nav");
var blockMap = document.querySelector(".contacts__map")
var navButton = document.querySelector(".main-nav__toggle");
var openModal = document.querySelector(".top__button");
var modal = document.querySelector(".modal-wrapper");
var toBasket = document.querySelectorAll(".product__basket");

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
// end open-close menu

if (modal) {
  if (openModal) {
  openModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  });
} 
  if (toBasket) {
    for (var i = 0; i < toBasket.length; i++) {
      toBasket[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.add("modal--show");
      });
    }
  }

modal.addEventListener("mousedown", function (event) {
  if (modal === event.target) {
  modal.classList.remove("modal--show")
  }
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  }
  });
};
// end open-close popup(basket)

if (blockMap) {
 blockMap.classList.remove("contacts__map--nojs");

   var map;
function initMap() {
  var LatLng = { lat: 59.938682, lng: 30.322989 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: LatLng,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: { lat: 59.938682, lng: 30.322989 },
    map: map,
    title: "Магазин Мишка",
    icon: {
      url: "img/map-pin.png",
      size: new google.maps.Size(67, 100),
      origin: new google.maps.Point(0, 0)
    }
  });
}
}
// end init map-api
