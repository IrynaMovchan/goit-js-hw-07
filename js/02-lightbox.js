import { galleryItems } from "./gallery-items.js";
// Change code below this line

const photoGallery = {
  gallery: document.querySelector(".gallery"),
};

createGalleryItems();

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createGalleryItems() {
  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
    })
    .join("");
  photoGallery.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
}
