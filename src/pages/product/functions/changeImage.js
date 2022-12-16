export const nextImage = (images, imageIndex, setImageIndex) => {
  if (imageIndex === images.length - 1) {
    return setImageIndex(0);
  }
  setImageIndex((prevValue) => prevValue + 1);
};

export const previousImage = (images, imageIndex, setImageIndex) => {
  if (imageIndex === 0) {
    return setImageIndex(images.length - 1);
  }
  setImageIndex((prevValue) => prevValue - 1);
};
