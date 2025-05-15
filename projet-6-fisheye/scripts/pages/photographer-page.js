import { getPhotographers, getMedia } from "/scripts/templates/data.js";
import { photographerHeaderTemplate } from "/scripts/templates/header.template.js";
import { galleryTemplate } from "/scripts/templates/gallery.template";
import { footerTemplate } from "/scripts/templates/footer.template.js";
import { contactModal } from "/scripts/utils/contactForm.js";
import { lightboxModal } from "/scripts/utils/lightbox.js";

let allMedia = [];
let currentPhotographerId = null;

// Le header
function displayHeader(photographers) {
  const header = document.querySelector(".photographer-header");
  const photographer = photographers.find(
    (photographer) => photographer.id.toString() === currentPhotographerId
  );
  if (photographer) {
    const photographerModel = photographerHeaderTemplate();
    const userHeaderDOM =
      photographerModel.getPhotographerHeaderDOM(photographer);
    header.appendChild(userHeaderDOM);
  }
}

// La galerie
function displayGallery(media) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  const galleryModel = galleryTemplate();

  media.forEach((mediaItem, index) => {
    mediaItem.index = index;
    const mediaCardDOM = galleryModel.getMediaCardDOM(mediaItem);
    gallery.appendChild(mediaCardDOM);
  });
}

// Fonction tri
function SortMedia(media) {
  const sortSelect = document.getElementById("8");

  sortSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    let sortedMedia = [...media];

    switch (selectedValue) {
      case "popular":
        sortedMedia.sort((a, b) => b.likes - a.likes);
        break;
      case "date":
        sortedMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "title":
        sortedMedia.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    displayGallery(sortedMedia);
  });
}

// Affichage dynamique des infos dans le footer
function displayFooter(photographers, media) {
  const footer = document.querySelector("footer");
  const photographerMedia = media.filter(
    (item) => item.photographerId.toString() === currentPhotographerId
  );

  const photographer = photographers.find(
    (photographer) => photographer.id.toString() === currentPhotographerId
  );

  if (photographer) {
    const footerModel = footerTemplate();
    const footerDOM = footerModel.getFooterDOM(photographer, photographerMedia);
    footer.appendChild(footerDOM);
  }
}

// Initialisation
async function init() {
  const { photographers } = await getPhotographers();
  const { media } = await getMedia();

  const urlParams = new URLSearchParams(window.location.search);
  currentPhotographerId = urlParams.get("id");

  // Filtrage des médias du photographe courant
  const photographerMedia = media.filter(
    (item) => item.photographerId.toString() === currentPhotographerId
  );

  // Tri initial par popularité
  photographerMedia.sort((a, b) => b.likes - a.likes);

  displayHeader(photographers);
  displayGallery(photographerMedia);
  SortMedia(photographerMedia);
  displayFooter(photographers, media);
  contactModal();
  lightboxModal(photographerMedia);
}

init();
