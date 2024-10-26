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
  const value = Number(valdationInputEl.value);

  if (value > minwidth) {
    condition.addRight();
  } else if (value < minwidth) {
    condition.addError();
  }
}

valdationInputEl.addEventListener('blur', handleBlurInput);
