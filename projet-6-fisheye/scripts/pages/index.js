import { getPhotographers } from "/scripts/templates/data.js";
import { photographerTemplate } from "/scripts/templates/photographer.template.js";

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const { getUserCardDOM } = photographerTemplate();
    const userCardDOM = getUserCardDOM(photographer);
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
