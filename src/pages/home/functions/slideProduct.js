export const slideProduct = (loading, data, setProductIndex) => {
  if (loading === false) {
    const imagesInterval = setInterval(() => {
      const randomProduct = Math.floor(Math.random() * data.length - 1);
      if (randomProduct < 0 || randomProduct > data.length - 1) return setProductIndex(0);
      setProductIndex(randomProduct);
    }, 3000);
    return () => clearInterval(imagesInterval);
  }
};
