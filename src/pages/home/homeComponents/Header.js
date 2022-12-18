import React, { useEffect, useState } from 'react';

//Components
import Loading from '../../../components/Loading';
import LoadHeader from '../functions/LoadHeader';

//Functions
import { loadProducts } from '../functions/loadProducts';

const FeaturedProduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productIndex, setProductIndex] = useState(null);

  useEffect(() => {
    loadProducts(setData, setLoading, setProductIndex);
  }, []);

  useEffect(() => {
    if (loading === false) {
      const imagesInterval = setInterval(() => {
        const randomProduct = Math.floor(Math.random() * data.length - 1);
        if (randomProduct < 0 || randomProduct > data.length - 1) return setProductIndex(0);
        setProductIndex(randomProduct);
      }, 3000);
      return () => clearInterval(imagesInterval);
    }
  }, [productIndex]);

  return (
    <>{loading === true ? <Loading /> : <LoadHeader data={data} productIndex={productIndex} />}</>
  );
};

export default FeaturedProduct;
