var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__toggle');
var langSelectMenu = document.querySelector('.lang-select__menu');
var langSelectToggle = document.querySelector('.lang-select__toggle');
var langSelectTitle = document.querySelector('.lang-select__title');
var langSelectItems = document.querySelectorAll('.lang-select__item');

function changeLanguage(item) {
  langSelectTitle.style.backgroundImage = item.style.backgroundImage;
}

function onLanguageItemClick() {
  changeLanguage(item);
}


navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__toggle--open')) {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    navToggle.classList.remove('header__toggle--open');
    navToggle.classList.add('header__toggle--close');
  } else {
    mainNav.classList.add('main-nav');
    mainNav.classList.remove('main-nav--closed');
    navToggle.classList.remove('header__toggle--close');
    navToggle.classList.add('header__toggle--open');
  }
});

langSelectToggle.addEventListener('click', function() {
  if (langSelectToggle.classList.contains('lang-select__toggle--open')) {
    langSelectMenu.classList.remove('lang-select__menu--closed');
    langSelectToggle.classList.remove('lang-select__toggle--open');
    langSelectToggle.classList.add('lang-select__toggle--close');
    langSelectTitle.classList.add('lang-select__title--hidden');
    langSelectItems.forEach(function (item) {
      item.addEventListener('click', onLanguageItemClick);
    });
  } else {
    langSelectMenu.classList.add('lang-select__menu--closed');
    langSelectToggle.classList.remove('lang-select__toggle--close');
    langSelectToggle.classList.add('lang-select__toggle--open');
    langSelectTitle.classList.remove('lang-select__title--hidden');
  }
});


