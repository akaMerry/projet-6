export function photographerTemplate() {
  function getUserCardDOM(photographer) {
    // Création des éléments
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", photographer.picture);
    const link = document.createElement("a");
    link.setAttribute("href", photographer.customlink);
    link.setAttribute("aria-label", photographer.name);
    const h2 = document.createElement("h2");
    h2.textContent = photographer.name;
    const h3 = document.createElement("h3");
    h3.textContent = `${photographer.city}, ${photographer.country}`;
    const description = document.createElement("p");
    description.textContent = photographer.tagline;
    const dailypricing = document.createElement("p");
    dailypricing.textContent = `${photographer.price}€/jour`;

    // Classes Tailwind CSS
    article.className =
      "flex flex-col justify-self-center justify-center items-center";
    link.className =
      "flex flex-col justify-self-center justify-center items-center";
    img.className = "w-50 h-50 object-cover rounded-full shadow-lg";
    h2.className = "text-4xl text-secondary-red mt-2";
    h3.className = "text-sm text-primary-red";
    description.className = "text-sm mt-0.5";
    dailypricing.className = "text-[9px] text-gray-500 mt-0.5";

    // Classes Tailwind CSS
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(description);
    article.appendChild(dailypricing);

    return article;
  }

  return { getUserCardDOM };
}
