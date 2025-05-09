import { getPhotographers, getMedia } from "/scripts/templates/data.js";
import { photographerHeaderTemplate } from "/scripts/templates/photographer-page-header.template.js";
import { galleryTemplate } from "/scripts/templates/gallery.template";
import { contactModal } from "/scripts/utils/contactForm.js";

let allMedia = [];
let currentPhotographerId = null;

// Le header
async function displayHeader(photographers) {
  const header = document.querySelector(".photographer-header");
  const urlParams = new URLSearchParams(window.location.search);
  currentPhotographerId = urlParams.get("id");
  // on cherche l'ID du photographe dans l'URL afin d'appliquer les infos correspondantes au template du header
  photographers.forEach((photographer) => {
    if (photographer.id.toString() === currentPhotographerId) {
      const photographerModel = photographerHeaderTemplate();
      const userHeaderDOM =
        photographerModel.getPhotographerHeaderDOM(photographer);
      header.appendChild(userHeaderDOM);
    }
  });
}

// La galerie
function displayGallery(media) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  // On filtre les médias pour ne garder que ceux du photographe en fonction de l'ID
  const photographerMedia = media.filter((item) => {
    return item.photographerId.toString() === currentPhotographerId;
  });
  const galleryModel = galleryTemplate();
  photographerMedia.forEach((mediaItem) => {
    const mediaCardDOM = galleryModel.getMediaCardDOM(mediaItem);
    gallery.appendChild(mediaCardDOM);
  });
}

// Initialisation de la page
async function init() {
  const { photographers } = await getPhotographers();
  const { media } = await getMedia();
  allMedia = media;

  displayHeader(photographers);
  displayGallery(allMedia);
  contactModal();
}

init();
