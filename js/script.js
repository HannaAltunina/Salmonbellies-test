var mainNav = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle--opened');

navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle--opened')) {
    mainNav.classList.remove('main-nav');
    mainNav.classList.add('main-nav__list--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    mainNav.classList.add('main-nav');
    mainNav.classList.remove('main-nav__list--closed');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  }
});