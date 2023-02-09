//functions
import { storage } from '../../../utils/firebase';
import { listAll, ref } from 'firebase/storage';
import { fetchImages, fetchJSON } from '../../../utils/fetchData';

export async function loadProducts(setData, setImages, setLoading, setPath) {
  let pathToCategories = [];
  let pathToProducts = [];

  const categoryRef = ref(storage, `products`);
  await listAll(categoryRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        return (pathToCategories = [...pathToCategories, folderRef.fullPath]);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  const randomCategoryNumber = Math.floor(Math.random() * pathToCategories.length);

  const productRef = ref(storage, pathToCategories[randomCategoryNumber]);
  await listAll(productRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        return (pathToProducts = [...pathToProducts, folderRef.fullPath]);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  const randomProductNumber = Math.floor(Math.random() * pathToProducts.length);
  const images = await fetchImages(pathToProducts[randomProductNumber]);
  const data = await fetchJSON(pathToProducts[randomProductNumber]);
  await Promise.all([data, images])
    .then(() => {
      setData(data);
      setImages(images);
      setPath(pathToProducts[randomProductNumber]);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
}
