//Hooks
import React, { useState, useEffect } from 'react';

//Components
import Loading from '../../../components/Loading';
import LoadNewProducts from '../functions/LoadNewProducts';

//Styles
import { NewProductsWrapp } from '../../../styles/elements/Home/HomeNewProducts/NewProductsWrapp';
import { ScrollContainer } from '../../../styles/elements/Home/HomeNewProducts/ScrollContainer';
import { P20 } from '../../../styles/elements/P20';

//Functions
import { listAll, ref } from 'firebase/storage';
import { storage } from '../../../utils/firebase';
import { fetchImages, fetchJSON } from '../../../utils/fetchData';

const NewProducts = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [pathToProduct, setPathToProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNewProductPaths() {
      let productsPaths = [];
      const productsRef = ref(storage, 'products');
      const productsResult = await listAll(productsRef);
      const categoryFolders = productsResult.prefixes;

      for (const categoryFolder of categoryFolders) {
        const categoryResult = await listAll(categoryFolder);
        const productFolders = categoryResult.prefixes;

        for (const productFolder of productFolders) {
          productsPaths.push(productFolder.fullPath);
        }
      }

      return productsPaths;
    }
    async function loadJSON() {
      const pathToProducts = await getNewProductPaths();
      const getJSON = pathToProducts.map((path) => fetchJSON(path));
      return await Promise.all(getJSON);
    }
    async function loadImages() {
      const pathToProducts = await getNewProductPaths();
      const getImages = pathToProducts.map((path) => fetchImages(path));
      return await Promise.all(getImages);
    }
    async function loadData() {
      const data = await loadJSON();
      const images = await loadImages();
      const pathToProduct = await getNewProductPaths();
      setData(data);
      setImages(images);
      setPathToProduct(pathToProduct);
      setLoading(false);
    }
    loadData();
  }, []);
  return (
    <>
      {loading === true || data === null ? (
        <Loading />
      ) : (
        <NewProductsWrapp>
          <P20>New arrivals</P20>
          <ScrollContainer>
            <LoadNewProducts data={data} images={images} pathToProduct={pathToProduct} />
          </ScrollContainer>
        </NewProductsWrapp>
      )}
    </>
  );
};

export default NewProducts;
