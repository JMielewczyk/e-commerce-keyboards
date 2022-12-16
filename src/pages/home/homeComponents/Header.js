import React, { useEffect, useState } from 'react';

//Components
import Loading from '../../../components/Loading';
import LoadHeader from '../functions/LoadHeader';

//Functions
import { slideProduct } from '../functions/slideProduct';
import { loadProducts } from '../functions/loadProducts';

const FeaturedProduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productIndex, setProductIndex] = useState(null);

  useEffect(() => {
    loadProducts(setData, setLoading, setProductIndex);
  }, []);

  useEffect(() => {
    slideProduct(loading, data, setProductIndex);
  }, [productIndex]);

  return (
    <>{loading === true ? <Loading /> : <LoadHeader data={data} productIndex={productIndex} />}</>
  );
};

export default FeaturedProduct;
