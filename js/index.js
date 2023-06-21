// Header

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

document.querySelector(".nav__close").addEventListener("click",

  function() {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
})

// Search

document.querySelector(".header__search").addEventListener("click",

  function() {

    document.querySelector(".header__form").classList.add("header__form--active");

    this.classList.add("active");
})

document.querySelector(".header__close").addEventListener("click",
  function() {

    let form = document.querySelector(".header__form");

    form.classList.remove("header__form--active");

    form.querySelector("input").value = "";

    document.querySelector(".header__search").classList.remove("active")
});

// Special

const swiper = new Swiper('.special__swiper', {
  speed: 600,

  pagination: {
    el: '.special__pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {

    paginationBulletMessage: 'Следующий слайд'

   },
  loop: true,
})


// Stages

let tabsBtn = document.querySelectorAll('.stages__step');
let tabsItem = document.querySelectorAll('.stages__div');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('stages__step--active')});
    e.currentTarget.classList.add('stages__step--active');

    tabsItem.forEach(function(element){ element.classList.remove('stages__div--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__div--active');
  });
});

// Review

new Accordion('.accordion__list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});
