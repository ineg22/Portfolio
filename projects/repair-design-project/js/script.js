'use strict'

const slider1 = document.querySelector("#mini-slider-1");
const slider1Left = document.querySelector("#mini-slider-1__left");
const slider1Right = document.querySelector("#mini-slider-1__right");
const slider2 = document.querySelector("#mini-slider-2");
const slider2Left = document.querySelector("#mini-slider-2__left");
const slider2Right = document.querySelector("#mini-slider-2__right");

slider1Left.addEventListener('click', moveSlideLeft(slider1, slider1Left, slider1Right));
slider1Right.addEventListener('click', moveSlideRight(slider1, slider1Left, slider1Right));
slider2Left.addEventListener('click', moveSlideLeft(slider2, slider2Left, slider2Right));
slider2Right.addEventListener('click', moveSlideRight(slider2, slider2Left, slider2Right));

function moveSlideLeft(slider, left, right) {
  return function () {
    if (slider.classList[1] === 'mini-slider__second-pos') {
      slider.classList.remove('mini-slider__second-pos');
      slider.classList.add('mini-slider__first-pos');
      left.classList.add('hidden');
    } else if (slider.classList[1] === 'mini-slider__third-pos') {
      slider.classList.remove('mini-slider__third-pos');
      slider.classList.add('mini-slider__second-pos');
      right.classList.remove('hidden');
    }
  }
}

function moveSlideRight(slider, left, right) {
  return function () {
    if (slider.classList[1] === 'mini-slider__second-pos') {
      slider.classList.remove('mini-slider__second-pos');
      slider.classList.add('mini-slider__third-pos');
      right.classList.add('hidden');
    } else if (slider.classList[1] === 'mini-slider__first-pos') {
      slider.classList.remove('mini-slider__first-pos');
      slider.classList.add('mini-slider__second-pos');
      left.classList.remove('hidden');
    }
  }
}

document.querySelector('.completed-projects').addEventListener('click', slideSelect);

function slideSelect(evt) {
  evt.stopPropagation();

  const sliderList = document.querySelectorAll('.completed-slider__select');

  setTimeout(() => {
    if (window.location.href.includes('slide-2')) {
      sliderList[1].classList.add('completed-slider__select--selected');
      sliderList[0].classList.remove('completed-slider__select--selected');
    } else if (window.location.href.includes('slide-1')) {
      sliderList[0].classList.add('completed-slider__select--selected');
      sliderList[1].classList.remove('completed-slider__select--selected');
    }
  }, 0);
}

const view = document.querySelector('.btn-view');
const mob = document.querySelector('.btn-mob');
const desk = document.querySelector('.btn-desk');
const gw = document.querySelector('.global-wrapper');
const iframe = document.querySelector('.iframe');

window.addEventListener('load', () => {
  if (document.body.clientWidth < 375) {
    view.classList.add('hidden');
  }
})

view.addEventListener('click', () => {
  if (!gw.classList.contains('hidden')) {
    gw.classList.add('hidden');
    iframe.classList.remove('hidden');
    mob.classList.add('hidden');
    desk.classList.remove('hidden');
    document.querySelector('.iframe iframe').contentDocument.querySelector('.global-btn').classList.add('hidden');
    document.querySelector('body').style = "background-color: darkgray;";

  } else {
    gw.classList.remove('hidden');
    iframe.classList.add('hidden');
    mob.classList.remove('hidden');
    desk.classList.add('hidden');
    document.querySelector('body').style = "background-color: initial;";
  }
})
