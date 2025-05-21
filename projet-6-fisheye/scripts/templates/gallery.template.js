export function galleryTemplate() {
  function getMediaCardDOM(media, updateFooterLikes) {
    // Création des éléments
    const article = document.createElement("article");
    const mediaPreview = document.createElement("div");
    const titleAndLikes = document.createElement("div");
    const title = document.createElement("p");
    title.textContent = media.title;
    const likes = document.createElement("p");
    const likeicon = document.createElement("i");
    likes.textContent = `${media.likes} `;

    // Vérification du type de média : image ou vidéo
    let img, video;
    if (media.type === "image") {
      img = document.createElement("img");
      img.setAttribute("src", media.custompath);
      img.setAttribute("alt", media.title);
      img.setAttribute("data-id", media.id); // Utilisation de l'ID unique du média
      mediaPreview.appendChild(img);
    } else if (media.type === "video") {
      video = document.createElement("video");
      video.controls = true;
      const source = document.createElement("source");
      source.src = media.custompath;
      source.type = "video/mp4";
      source.setAttribute("data-id", media.id); // Utilisation de l'ID unique du média
      video.appendChild(source);
      mediaPreview.appendChild(video);
    }

    // Classes Tailwind CSS
    mediaPreview.className = "h-75 w-87.5 rounded-sm overflow-hidden";
    if (media.type === "video") {
      video.className =
        "preview cursor-pointer w-full h-full object-cover rounded-sm";
    } else {
      img.className =
        "preview cursor-pointer w-full h-full object-cover rounded-sm";
    }

    titleAndLikes.className = "flex justify-between items-center w-full mt-2";
    likeicon.className = "fas fa-heart cursor-pointer"; // Class à ajouter au like
    title.className = "text-base text-primary-red text-xl";
    likes.className = "text-base text-primary-red text-xl";
    article.className =
      "flex flex-col justify-center items-center bg-white w-87.5 h-87.5";

    // Rattacher les éléments
    titleAndLikes.appendChild(title);
    likes.appendChild(likeicon);
    titleAndLikes.appendChild(likes);
    article.appendChild(mediaPreview);
    article.appendChild(titleAndLikes);

    // Compteur de likes
    let liked = false;
    likeicon.addEventListener("click", () => {
      if (!liked) {
        liked = true;
        media.likes += 1;
        likeicon.classList.add("text-red-500");
      } else {
        liked = false;
        media.likes -= 1;
        likeicon.classList.remove("text-red-500");
      }

      // Mise à jour des likes dans la galerie
      likes.firstChild.nodeValue = `${media.likes} `;

      // AMise à jour des likes dans le footer
      updateFooterLikes();
    });

    return article;
  }

  return { getMediaCardDOM };
}
