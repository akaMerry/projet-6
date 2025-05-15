export function footerTemplate() {
  function getFooterDOM(photographer, media) {
    // Filtrage des médias du photographe pour calculer le total des likes
    const photographerMedia = media.filter(
      (item) => item.photographerId.toString() === photographer.id.toString()
    );
    const totalLikes = photographerMedia.reduce(
      (sum, item) => sum + item.likes,
      0
    );

    // Création des éléments
    const grid = document.createElement("div");
    const likes = document.createElement("div");
    const likesNumber = document.createElement("p");
    likesNumber.textContent = totalLikes;
    const heartIcon = document.createElement("i");
    const price = document.createElement("div");
    const priceText = document.createElement("p");
    priceText.textContent = `${photographer.price}€ / jour`;

    // Classes Tailwind CSS
    grid.className =
      "grid flex grid-cols-2 items-center h-full w-full pl-8 pr-8 -mt-1 text-black text-xl font-semibold";
    likes.className = "flex items-center justify-start";
    heartIcon.className = "fas fa-heart ml-2";
    price.className = "flex justify-end";

    // Rattachement des éléments
    likes.appendChild(likesNumber);
    likes.appendChild(heartIcon);
    price.appendChild(priceText);
    grid.appendChild(likes);
    grid.appendChild(price);

    return grid;
  }

  return { getFooterDOM };
}
