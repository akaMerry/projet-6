export function lightboxTemplate() {
  function getLightboxDOM(media) {
    // Création des éléments
    const lightboxModal = document.querySelector(".lightbox_modal");
    const grid = document.createElement("div");
    const previous = document.createElement("div");
    const previousBtn = document.createElement("img");
    previousBtn.setAttribute("src", "assets/icons/previous.svg");
    previousBtn.setAttribute("alt", "Previous image");
    const next = document.createElement("div");
    const nextBtn = document.createElement("img");
    nextBtn.setAttribute("src", "assets/icons/next.svg");
    nextBtn.setAttribute("alt", "Next image");
    const displayedMedia = document.createElement("div");
    const title = document.createElement("p");
    title.textContent = media.title;
    const closeBtn = document.createElement("img");
    closeBtn.setAttribute("src", "assets/icons/next.svg");
    closeBtn.setAttribute("alt", "Next image");

    // Vérification du type de média : image ou vidéo
    let img, video;
    if (media.type === "image") {
      img = document.createElement("img");
      img.setAttribute("src", media.custompath);
      img.setAttribute("alt", media.title);
      displayedMedia.appendChild(img);
    } else if (media.type === "video") {
      video = document.createElement("video");
      // Pour différencier les photos et les vidéos, on garde les controles de la vidéo
      video.controls = true;
      const source = document.createElement("source");
      source.src = media.custompath;
      source.type = "video/mp4";
      video.appendChild(source);
      displayedMedia.appendChild(video);
    }

    // Classes Tailwind CSS
    grid.className =
      "grid grid-cols-3 h-4xl w-7xl ml-24 mr-24 mt-5 justify-items-center";
    previous.className = "flex justify-center items-center";
    previousBtn.className = "previous-btn cursor-pointer";
    next.className = "flex justify-center items-center";
    nextBtn.className = "next-btn cursor-pointer";
    closeBtn.className = "close-btn cursor-pointer";

    // Rattachement des éléments
    previous.appendChild(previousBtn);
    next.appendChild(closeBtn);
    next.appendChild(nextBtn);
    displayedMedia.appendChild(title);
    grid.appendChild(previous);
    grid.appendChild(displayedMedia);
    grid.appendChild(next);
    lightboxModal.appendChild(grid);

    return grid;
  }

  return { getLightboxDOM };
}
