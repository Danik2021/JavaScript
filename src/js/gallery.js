import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
               <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
            </li>`;
  })
  .join('');

galleryListEl.innerHTML = items;

new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// Завдання 1 - бібліотека SimpleLightbox
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1.Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// 2.Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
// 3.Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.
