'use strict'

const view = document.querySelector('.btn-view');
const mob = document.querySelector('.btn-mob');
const desk = document.querySelector('.btn-desk');
const gw = document.querySelector('.global-wrapper');
const iframe = document.querySelector('.iframe');

window.addEventListener('load', () => {
  if (document.body.clientWidth < 640) {
    view.classList.add('hidden');
  }
})

view.addEventListener('click', () => {
  if (!gw.classList.contains('hidden')) {
    gw.classList.add('hidden');
    iframe.classList.remove('hidden');
    mob.classList.add('hidden');
    desk.classList.remove('hidden');
    document.querySelector('iframe').contentDocument.querySelector('.global-btn').classList.add('hidden');
    document.querySelector('body').style = "background-color: darkgray;";

  } else {
    gw.classList.remove('hidden');
    iframe.classList.add('hidden');
    mob.classList.remove('hidden');
    desk.classList.add('hidden');
    document.querySelector('body').style = "background-color: initial;";
  }
})