export function lightboxModal() {
  const modalBtn = document.querySelectorAll(".preview");
  const modalClose = document.querySelectorAll(".close-btn");
  const modalNext = document.querySelectorAll(".next-btn");
  const modalPrevious = document.querySelectorAll(".previous-btn");

  // Ouverture de la modale
  function openLightboxModal() {
    const lightboxModal = document.getElementById("lightbox_modal");
    lightboxModal.classList.remove("hidden");
    lightboxModal.classList.add("flex");
  }

  // Fermeture de la modale
  function closeLightboxModal() {
    const lightboxModal = document.getElementById("lightbox_modal");
    lightboxModal.classList.remove("flex");
    lightboxModal.classList.add("hidden");
  }

  // Événements pour les boutons
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", openLightboxModal);
  });

  modalClose.forEach((btn) => {
    btn.addEventListener("click", closeLightboxModal);
  });

  modalNext.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Next image");
    });
  });

  modalPrevious.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Previous image");
    });
  });
}
