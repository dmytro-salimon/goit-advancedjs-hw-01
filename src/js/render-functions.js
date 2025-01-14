export const createGalleryCardsTemplate = picturesArr => {
  return picturesArr.reduce((acc, pictureInfo) => {
    return (
      acc +
      `
      <li class="gallery-item">
	    <a class="gallery-link" href="${pictureInfo.original}">
		  <img
			class="gallery-image"
			src="${pictureInfo.preview}"
			alt="${pictureInfo.description}"
		  />
	    </a>
      </li>
    `
    );
  }, '');
};