'use strict';

const valdationInputEl = document.querySelector('#validation-input');

const condition = {
  addError() {
    valdationInputEl.classList.remove('valid');
    valdationInputEl.classList.add('invalid');
  },
  addRight() {
    valdationInputEl.classList.remove('invalid');
    valdationInputEl.classList.add('valid');
  },
};

function handleBlurInput() {
  const minwidth = valdationInputEl.dataset.length;
  const value = valdationInputEl.value.length;
  if (value < minwidth) {
    condition.addError();
  } else if (value >= minwidth) {
    condition.addRight();
  }
}

valdationInputEl.addEventListener('blur', handleBlurInput);
