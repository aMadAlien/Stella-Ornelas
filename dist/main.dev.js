"use strict"; // Меню бургер

var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock'); //запрещает прокрутку основной страницы при включенном меню + код в css

    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active'); //открывает меню при клике на него
  });
} // Прокрутка при клике


var menuLinks = document.querySelectorAll('.menu__link');

if (menuLinks.length > 0) {
  var onMenuLinkClick = function onMenuLinkClick(e) {
    var menuLink = e.target;

    if (iconMenu.classList.contains('_active')) {
      //=если объект иконки меню содержит класс _active = если меню открыто
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    }
  };

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}