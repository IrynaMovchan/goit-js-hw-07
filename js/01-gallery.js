import { galleryItems } from "./gallery-items.js";
// Change code below this line
const photoGallery = {
  gallery: document.querySelector(".gallery"),
};

createGalleryItems();

photoGallery.gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalPhotoSrc = event.target.dataset.source;
  openModal(originalPhotoSrc);
}

function createGalleryItems() {
  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  photoGallery.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
}

function openModal(sourse) {
  const instance = basicLightbox.create(
    `
    <img src="${sourse}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeyDownEscape);
        console.log("Show");
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeyDownEscape);
        console.log("Close");
      },
    }
  );
  instance.show();

  function onKeyDownEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
