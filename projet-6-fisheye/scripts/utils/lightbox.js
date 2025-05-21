export function lightboxModal(media) {
  const modalBtn = document.querySelectorAll(".preview");
  const modalClose = document.querySelectorAll(".close-btn");
  const modalNext = document.querySelectorAll(".next-btn");
  const modalPrevious = document.querySelectorAll(".previous-btn");

  const lightboxModal = document.getElementById("lightbox_modal");
  const mediaContainer = document.querySelector(".media-container");
  const mediaTitle = document.querySelector(".media-title");

  let currentIndex = 0;

  // Afficher le média actuel dans la lightbox
  function displayMedia(index) {
    const currentMedia = media[index];
    mediaContainer.innerHTML = "";
    mediaTitle.textContent = currentMedia.title;

    if (currentMedia.type === "image") {
      const img = document.createElement("img");
      img.src = currentMedia.custompath;
      img.alt = currentMedia.title;
      img.className = "flex h-225 w-262.5  object-cover";
      mediaContainer.appendChild(img);
    } else if (currentMedia.type === "video") {
      const video = document.createElement("video");
      video.controls = true;
      video.className = "h-225 w-262.5 flex object-cover";

      const source = document.createElement("source");
      source.src = currentMedia.custompath;
      source.type = "video/mp4";

      video.appendChild(source);
      mediaContainer.appendChild(video);
    }
  }

  function openLightboxModal(index) {
    currentIndex = index;
    displayMedia(currentIndex);
    lightboxModal.classList.remove("hidden");
    lightboxModal.classList.add("flex");
  }

  function closeLightboxModal() {
    lightboxModal.classList.remove("flex");
    lightboxModal.classList.add("hidden");
  }

  function showNextMedia() {
    currentIndex = (currentIndex + 1) % media.length;
    displayMedia(currentIndex);
  }

  function showPreviousMedia() {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    displayMedia(currentIndex);
  }

  // Écouteurs d'événements sur les boutons de la lightbox
  modalBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => openLightboxModal(index));
  });

  modalClose.forEach((btn) => {
    btn.addEventListener("click", closeLightboxModal);
  });

  modalNext.forEach((btn) => {
    btn.addEventListener("click", showNextMedia);
  });

  modalPrevious.forEach((btn) => {
    btn.addEventListener("click", showPreviousMedia);
  });
}
