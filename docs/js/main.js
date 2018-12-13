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

 ymaps.ready(init);
   var myMap,
       myPlacemark;

    function init(){ 
        // Создание карты.    
            myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.9386,30.3231],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        myPlacemark = new ymaps.Placemark ([59.9386,30.3232], {
            balloonContentHeader: 'Mishka',
            balloonContentBody: 'Здесь вы найдете вязанные грушки</br>и изделия для дома',
            balloonContentFooter: 'заходите через центральный вход',
            hintContent: 'Вязаные изделия',
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pin.png',
            iconImageSize: [34, 46],
            iconImageOffset: [-16, -45]
          });

        myMap.geoObjects.add(myPlacemark)
    }
}
// end init map-api
