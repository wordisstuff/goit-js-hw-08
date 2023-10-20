// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryList = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`).join('');

gallery.insertAdjacentHTML('beforeend', galleryList);

// gallery.addEventListener('click', (event) => {
//     event.preventDefault()
//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     }
//     let instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">`);
//     instance.show()

//     gallery.addEventListener('keydown', event => event.key === "Escape" ? instance.close() : instance.visible());
// })