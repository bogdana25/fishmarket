
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// -------------------------
// Навбар бургер / Navbar burger
let menuBtn = document.querySelector('.open');
let menuBtn2 = document.querySelector('.close');
let menu = document.querySelector('.navbar-burger__menu');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');
let up = document.querySelector('.up-btn');
menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
   overlay.classList.toggle('active');
   body.classList.toggle('noscroll');
   menuBtn2.classList.toggle('active');
})
menuBtn2.addEventListener('click', function () {
   menuBtn.classList.remove('active');
   menu.classList.remove('active');
   overlay.classList.remove('active');
   body.classList.remove('noscroll');
   menuBtn2.classList.remove('active');
})
overlay.addEventListener('click', function () {
   menuBtn.classList.remove('active');
   menu.classList.remove('active');
   overlay.classList.remove('active');
   body.classList.remove('noscroll');
   menuBtn2.classList.remove('active');
})
up.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
})

// -------------------------
// Табы / Tabs
function Tabs() {
   var bindAll = function () {
      var menuElements = document.querySelectorAll('[data-tab]');
      for (var i = 0; i < menuElements.length; i++) {
         menuElements[i].addEventListener('click', change, false);
      }
   }

   var clear = function () {
      var menuElements = document.querySelectorAll('[data-tab]');
      for (var i = 0; i < menuElements.length; i++) {
         menuElements[i].classList.remove('active');
         var id = menuElements[i].getAttribute('data-tab');
         document.getElementById(id).classList.remove('active');
      }
   }

   var change = function (e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
   }

   bindAll();
}

var connectTabs = new Tabs();



// Свайпер / Swiper
//  Категории / Kategori

new Swiper('.image-slider', {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   pagination: {
      // el: ".swiper-points",
      clickable: true,
   },
   // стрелки 
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
      },

      668: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});


// Свайпер / Swiper 2
//  REVIEWS

new Swiper('.rewiews-slider', {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   pagination: {
      // el: ".swiper-points",
      clickable: true,
   },
   // стрелки 
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
      },

      668: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});