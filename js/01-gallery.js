import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');

const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" data-lightbox="gallery">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('');

galleryListEl.innerHTML = items;

galleryListEl.addEventListener('click', handleClickLink);

function handleClickLink(e) {
  e.preventDefault();
  const target = e.target;
  if (!target.classList.contains('gallery__image')) {
    return;
  }
  createNewImg(target.dataset.source);
}

function createNewImg(data) {
  const image = `<img
      class="gallery__image"
      src="${data}"
    />`;
  basicLightbox.create(image).show();
}
