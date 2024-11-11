'use strict';

let counterValue = 0;

const counterValueEl = document.querySelector('#value');

const buttonDecrementEl = document.querySelector('[data-action="decrement"]');

const buttonIncrementEl = document.querySelector('[data-action="increment"]');

buttonDecrementEl.addEventListener('click', () => {
  counterValueEl.textContent = counterValue -= 1;
});

buttonIncrementEl.addEventListener('click', () => {
  counterValueEl.textContent = counterValue += 1;
});
