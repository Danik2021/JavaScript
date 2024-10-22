'use sctrict';

/* textContent = "Welcome to Bananas"
// const titleEl = document.querySelector('.article-title');
// titleEl.textContent = 'Welcome to Bahamas!';
*/

// elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
// elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
// ======================================================
// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// elem.setAttribute(name, value) - встановлює атрибут.
// elem.removeAttribute(name) - видаляє атрибут.
// elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
// ======================================================
// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
// =======================================================
// --> <header class="header">
//   <div class="container">
//     <h1 class="title">Hello</h1>
//     <p class="about">
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum necessitatibus illo
//       similique ea, blanditiis quos enim laboriosam voluptatibus, aspernatur beatae omnis.
//       Maxime, qui minima natus aliquid veritatis iure, modi officiis esse facilis recusandae
//       nostrum nulla fuga laborum quisquam deserunt delectus.
//     </p>
//   </div>
// </header>;

const headerEl = document.createElement('header');
headerEl.classList.add('header');

const contEl = document.createElement('div');
contEl.classList.add('container');

const titleEl = document.createElement('h1');
titleEl.classList.add('title');

const textP = document.createElement('p');
titleEl.classList.add('about');

textP.textContent =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum necessitatibus illo  similique ea, blanditiis quos enim laboriosam voluptatibus, aspernatur beatae omnis. Maxime, qui minima natus aliquid veritatis iure, modi officiis esse facilis recusandae nostrum nulla fuga laborum quisquam deserunt delectus.';

document.querySelector('body').prepend(headerEl);

headerEl.append(contEl, titleEl, textP);
