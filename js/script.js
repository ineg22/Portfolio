'use strict'

document.querySelector('#eduHead').addEventListener('click', () => {
  let hidden = document.querySelector('#eduBody').classList.contains('hidden');

  if (hidden) {
    document.querySelector('#eduBody').classList.remove('hidden');
    document.querySelector('#arrow').style.cssText = "transform: rotate(270deg)";

  } else {
    document.querySelector('#eduBody').classList.add('hidden');
    document.querySelector('#arrow').style.cssText = "transform: rotate(90deg)";
  }
});

var mySwiper = new Swiper ('.swiper-container', {
  nested: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

let desk = document.querySelector('.desk');
let deskShow = document.querySelector('.desk--show');
let deskHide = document.querySelector('.desk--hide');
let aboutArr = document.querySelectorAll('.about');

desk.addEventListener('click', () => {
  aboutArr.forEach(about => {
    if (about.classList.contains('hidden')) {
      about.classList.remove('hidden');
      deskShow.classList.add('hidden');
      deskHide.classList.remove('hidden');
    } else {
      about.classList.add('hidden');
      deskShow.classList.remove('hidden');
      deskHide.classList.add('hidden');
    }
  })
});
