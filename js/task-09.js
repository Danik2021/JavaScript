'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function сhangeBackgroundBody() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanShowingColorEl.textContent = color;
}

const bodyEl = document.querySelector('body');

const spanShowingColorEl = document.querySelector('.color');

const buttonChangeColorEl = document.querySelector('.change-color');

buttonChangeColorEl.addEventListener('click', сhangeBackgroundBody);
