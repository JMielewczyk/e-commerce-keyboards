import { storage } from './firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export async function fetchJSON(pathToProduct) {
  if (!pathToProduct) return;
  const url = await getDownloadURL(ref(storage, `${pathToProduct}/data.json`));
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
}

export async function fetchImages(pathToProduct) {
  if (!pathToProduct) return;
  const listRef = ref(storage, `${pathToProduct}/images`);
  const res = await listAll(listRef);
  const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
  const images = await Promise.all(promises);
  return images;
}

export async function getProducts(category) {
  return new Promise((resolve) => {
    let productsInCategory = [];
    const listRef = ref(storage, `products/${category}`);
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          productsInCategory = [...productsInCategory, folderRef.fullPath];
        });
      })
      .then(() => {
        resolve(productsInCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
