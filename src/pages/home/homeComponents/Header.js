import React, { useEffect, useState } from 'react';

//Components
import Loading from '../../../components/Loading';
import LoadHeader from '../functions/LoadHeader';

//Functions
import { loadProducts } from '../functions/loadProducts';

const FeaturedProduct = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [path, setPath] = useState(null);

  useEffect(() => {
    loadProducts(setData, setImages, setLoading, setPath);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      loadProducts(setData, setImages, setLoading, setPath);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>{loading === true ? <Loading /> : <LoadHeader data={data} images={images} path={path} />}</>
  );
};

export default FeaturedProduct;
