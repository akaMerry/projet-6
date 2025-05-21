export function photographerHeaderTemplate() {
  function getPhotographerHeaderDOM(photographer) {
    // Création des éléments
    const grid = document.createElement("div");
    const contact = document.createElement("button");
    contact.setAttribute("type", "button");
    contact.textContent = "Contactez-moi";
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", photographer.picture);
    img.setAttribute("alt", `${photographer.name} - portrait`);
    const h1 = document.createElement("h1");
    h1.textContent = photographer.name;
    const h2 = document.createElement("h2");
    h2.textContent = `${photographer.city}, ${photographer.country}`;
    const description = document.createElement("p");
    description.textContent = photographer.tagline;

    // Classes Tailwind CSS
    article.className = "col-span-1 self-center flex flex-col";
    h1.className = "text-6xl text-secondary-red pl-15 pr-15";
    h2.className = "text-2xl text-primary-red mt-4 pl-15 pr-15";
    description.className = "text-lg text-gray-600 mt-4 pl-15 pr-15";
    contact.className =
      "modal-btn cursor-pointer col-span-1 self-center h-17 w-43 bg-primary-red text-white text-xl font-semibold rounded-lg hover:bg-tertiary-red hover:shadow-lg hover:text-black transition duration-400 ease-in-out";
    img.className =
      "col-span-1 self-center w-50 h-50 object-cover rounded-full shadow-lg ml-20";
    grid.className =
      "grid grid-cols-3 bg-gray-100 h-78.5 w-310 ml-24 mr-24 mt-5 justify-items-center";

    // Rattachement des éléments
    article.appendChild(h1);
    article.appendChild(h2);
    article.appendChild(description);
    grid.appendChild(article);
    grid.appendChild(contact);
    grid.appendChild(img);

    return grid;
  }

  return { getPhotographerHeaderDOM };
}
