//Hooks
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Loading from '../../components/Loading';
import LoadContent from './functions/LoadContent';

//Functions
import { ProductsListWrapp } from '../../styles/elements/ProductsList/ProductsListWrapp';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../utils/firebase';
import { fetchImages, fetchJSON, getProducts } from '../../utils/fetchData';

const ProductList = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    async function getJSON() {
      const productsInCategory = await getProducts(category);
      const data = productsInCategory.map(async (product) => {
        const downloadURL = await getDownloadURL(ref(storage, `${product}/data.json`));
        const response = await fetchJSON(downloadURL);
        return await response;
      });
      return await Promise.all(data);
    }
    async function getImages() {
      const productsInCategory = await getProducts(category);
      const images = productsInCategory.map(async (product) => fetchImages(product));
      return await Promise.all(images);
    }
    const loadState = async () => {
      const data = await getJSON();
      const images = await getImages();
      setData(data);
      setImages(images);
      setLoading(false);
    };
    loadState();
  }, [category]);
  return (
    <>
      {loading === true || data === null ? (
        <Loading />
      ) : (
        <ProductsListWrapp>
          <LoadContent data={data} images={images} category={category} />
        </ProductsListWrapp>
      )}
    </>
  );
};

export default ProductList;
