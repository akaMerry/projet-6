// Transformation de la data JSON en objets JS pour les photographes
export async function getPhotographers() {
  const response = await fetch("/data/photographers.json");
  const photographersData = await response.json();

  const photographerDetails = photographersData.photographers.map(
    ({ id, name, portrait, city, country, tagline, price }) => {
      return {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait,
        picture: `assets/photographers/${portrait}`,
        customlink: `/photographer.html?id=${id}`,
      };
    }
  );

  return {
    photographers: photographerDetails,
  };
}
// Transformation de la data JSON en objets JS pour les médias
export async function getMedia() {
  const response = await fetch("/data/photographers.json");
  const media = await response.json();

  const mediaDetails = media.media.map(
    ({ id, photographerId, title, image, video, likes, date, price }) => {
      const isImage = !!image;
      return {
        id,
        photographerId,
        title,
        likes,
        date,
        price,
        type: isImage ? "image" : "video",
        file: isImage ? image : video,
        custompath: `assets/images/${isImage ? image : video}`,
        medialink: `/photographer.html?id=${photographerId}&mediaId=${id}`,
      };
    }
  );

  return {
    media: mediaDetails,
  };
}
