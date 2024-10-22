'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;
  ingredientsListEl.append(itemEl);
});

console.log(ingredientsListEl);
