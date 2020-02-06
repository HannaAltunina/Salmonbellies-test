var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__toggle');
var langSelectMenu = document.querySelector('.lang-select__menu');
var langSelectToggle = document.querySelector('.lang-select__toggle');
var langSelectTitle = document.querySelector('.lang-select__title');
var langTitleLink = langSelectTitle.querySelector('.lang-select__link');

function closeLanguageMenu() {
  langSelectMenu.classList.add('lang-select__menu--closed');
  langSelectToggle.classList.remove('lang-select__toggle--close');
  langSelectToggle.classList.add('lang-select__toggle--open');
  langSelectTitle.classList.remove('lang-select__title--hidden');
}

function changeLanguage() {
  var langSelectItems = document.querySelectorAll('.lang-select__item');
  langSelectItems.forEach(function (it) {
    it.addEventListener('click', function () {
      var titleClasses = langSelectTitle.querySelector('.lang-select__link').classList;
      titleClasses.forEach(function (it) {
        langSelectTitle.querySelector('.lang-select__link').classList.remove(it);
      });
      var linkClasses = it.querySelector('.lang-select__link').classList;
      linkClasses.forEach(function (it) {
        langTitleLink.classList.add(it);
      });
      closeLanguageMenu();
      return langTitleLink;
    });
    return it;
  });
}

function openLanguageMenu() {
  langSelectMenu.classList.remove('lang-select__menu--closed');
  langSelectToggle.classList.remove('lang-select__toggle--open');
  langSelectToggle.classList.add('lang-select__toggle--close');
  langSelectTitle.classList.add('lang-select__title--hidden');
  changeLanguage();
}

function openMainNav() {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
  navToggle.classList.remove('header__toggle--open');
  navToggle.classList.add('header__toggle--close');
}

function closeMainNav() {
  mainNav.classList.add('main-nav');
  mainNav.classList.remove('main-nav--closed');
  navToggle.classList.remove('header__toggle--close');
  navToggle.classList.add('header__toggle--open');
}

function onNavToggleClick() {
  if (navToggle.classList.contains('header__toggle--open')) {
    openMainNav();
  } else {
    closeMainNav();
  }
}

function onNavToggleEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    if (navToggle.classList.contains('header__toggle--open')) {
      openMainNav();
    } else {
      closeMainNav();
    }
  }
}

navToggle.addEventListener('click', onNavToggleClick);
navToggle.addEventListener('keyboard', onNavToggleEnterPress);


langSelectToggle.addEventListener('click', function() {
  if (langSelectToggle.classList.contains('lang-select__toggle--open')) {
    openLanguageMenu()
  } else {
    closeLanguageMenu();
  }
});
