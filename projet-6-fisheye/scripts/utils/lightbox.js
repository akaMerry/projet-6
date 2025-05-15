export function lightboxModal() {
  const modalBtn = document.querySelectorAll(".preview");
  const modalClose = document.querySelectorAll(".close-btn");
  const modalNext = document.querySelectorAll(".next-btn");
  const modalPrevious = document.querySelectorAll(".previous-btn");

  // Ouverture de la lightbox
  function openLightboxModal() {
    const lightboxModal = document.getElementById("lightbox_modal");
    lightboxModal.classList.remove("hidden");
    lightboxModal.classList.add("flex");
  }

  // Fermeture de la lightbox
  function closeLightboxModal() {
    const lightboxModal = document.getElementById("lightbox_modal");
    lightboxModal.classList.remove("flex");
    lightboxModal.classList.add("hidden");
  }

  // Ecouteurs d'événements sur les boutons d'ouverture
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", openLightboxModal);
  });

  modalClose.forEach((btn) => {
    btn.addEventListener("click", closeLightboxModal);
  });
}
