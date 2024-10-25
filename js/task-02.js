'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsItemsEl = [];

ingredients.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  ingredientsItemsEl.push(li);
});

ingredientsListEl.append(...ingredientsItemsEl);

console.log(ingredientsListEl);
