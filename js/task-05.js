'use strict';

const inputEl = document.querySelector('#name-input');

const inputOutputEl = document.querySelector('#name-output');

function handleIndex() {
  inputOutputEl.textContent = inputEl.value;
  if (!inputEl.value) {
    inputOutputEl.textContent = 'Anonymous';
  }
}

inputEl.addEventListener('input', handleIndex);
