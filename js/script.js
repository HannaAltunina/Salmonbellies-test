var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__toggle');

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