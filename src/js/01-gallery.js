// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallerySelector = document.querySelector(`.gallery`);
 

const markUpGallerySecond = (items) => {
    return items
    .map((item) => {
        const { preview, original, description } = item;
        return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}"
                alt="${description}"/>
                </a>
               </li>`;
        }).join('');
};

console.log(markUpGallerySecond(galleryItems));

const createInnerHtml = () => {
    gallerySelector.innerHTML = markUpGallerySecond(galleryItems);
}
createInnerHtml();

function preventDefault(event) {
    event.preventDefault();
}
gallerySelector.addEventListener("click", preventDefault)
let library = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});