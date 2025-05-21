import { getPhotographers } from "/scripts/services/data.js";

export async function contactModal() {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalClose = document.querySelectorAll(".close-btn");
  // j'extrais la donnée photographers
  const { photographers } = await getPhotographers();
  // ouverture et fermeture de la modale
  function displayModal() {
    const contactModal = document.getElementById("contact_modal");
    contactModal.classList.remove("hidden");
    contactModal.classList.add("flex");
    // Pour afficher le nom du photographe dans la modale
    displayNameForm(photographers);
  }
  function closeModal() {
    const contactModal = document.getElementById("contact_modal");
    contactModal.classList.remove("flex");
    contactModal.classList.add("hidden");
  }
  // Ecouteurs sur les boutons d'ouverture et de fermeture de la modale
  modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));
  modalClose.forEach((image) => image.addEventListener("click", closeModal));
}

// Pour trouver le nom du photographe à afficher dans la modale de contact
function displayNameForm(photographers) {
  const photographerNameElement = document.querySelector(".photographer_name");

  const urlParams = new URLSearchParams(window.location.search);
  const currentPhotographerId = urlParams.get("id");

  const photographer = photographers.find(
    (photographer) => photographer.id.toString() === currentPhotographerId
  );

  if (photographer) {
    photographerNameElement.textContent = photographer.name;
  }
}
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");

// Envoi du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;
  // Regex patterns
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-']+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Vérification de chaque champ
  inputs.forEach((input) => {
    // Un switch pour double vérification des champs
    const name = input.name;
    const value = input.value.trim();
    let customError = "";
    switch (name) {
      case "first":
      case "last":
        if (value.length < 2) {
          customError = "Le champ doit contenir au moins 2 caractères.";
        } else if (!nameRegex.test(value)) {
          customError = "Ce champ ne peut pas contenir d'espace.";
        }
        break;

      case "e-mail":
        if (!emailRegex.test(value)) {
          customError =
            "Veuillez entrer une adresse e-mail valide contenant @ et .";
        }
        break;
    }
  });
  // Lorsque les données sont valides
  if (valid) {
    // Les données ne sont pas envoyées à un serveur, mais affichées dans la console dans un objet
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());
    console.log(userData);
    // Le fomulaire est caché lorsqu'il est validé
    form.style.display = "none";
  }
});
