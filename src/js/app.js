
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

let menuBtn = document.querySelector('.navbar-burger');
let menu = document.querySelector('.navbar-burger__menu');
menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
})