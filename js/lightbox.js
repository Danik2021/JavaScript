import { galleryItems } from './gallery-items.js';

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
