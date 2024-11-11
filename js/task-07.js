'use strict';

const fontSizeControlInputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

function handleInput() {
  const value = fontSizeControlInputEl.value;
  console.log(value + 'px');
  textEl.style.fontSize = value + 'px';
}

fontSizeControlInputEl.addEventListener('input', handleInput);
