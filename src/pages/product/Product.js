//Hooks
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

//Components
import Loading from '../../components/Loading';

//Styles
import { ProductPageWrapp } from '../../styles/elements/Product/Main/ProductPageWrapp';

//Functions
import { fetchImages, fetchJSON } from '../../utils/fetchData';
import LoadHeader from './functions/LoadHeader';
import LoadContent from './functions/LoadContent';

const ProductElement = ({ basket }) => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderAmount, setOrderAmount] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const { category, product } = useParams();
  const location = useLocation();
  const pathToProduct = `products/${category}/${product}`;

  useEffect(() => {
    async function loadContent() {
      const data = await fetchJSON(pathToProduct);
      const images = await fetchImages(pathToProduct);
      setData(data);
      setImages(images);
      setLoading(false);
    }
    loadContent();
  }, []);

  return (
    <>
      {loading || data === null ? (
        <Loading />
      ) : (
        <ProductPageWrapp>
          <LoadHeader
            loading={loading}
            images={images}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
          <LoadContent
            basket={basket}
            location={location}
            data={data}
            images={images}
            category={category}
            orderAmount={orderAmount}
            setOrderAmount={setOrderAmount}
          />
        </ProductPageWrapp>
      )}
    </>
  );
};
export default ProductElement;
