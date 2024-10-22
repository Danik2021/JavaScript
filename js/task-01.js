'use strict';

const categoriesItemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(item => {
  console.log(item.firstElementChild.textContent);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
