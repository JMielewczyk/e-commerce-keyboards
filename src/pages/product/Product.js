//Hooks
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

//Components
import ProductHeader from './ProductHeader';
import Loading from '../../components/Loading';

//Styles
import { ProductPageWrapp } from '../../styles/elements/Product/Main/ProductPageWrapp';

//Functions
import { fetchData } from '../../utils/fetchData';
import LoadContent from './functions/LoadContent';

const ProductElement = ({ basket }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderAmount, setOrderAmount] = useState(0);
  const { category, product } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function loadContent() {
      const data = await fetchData();
      setData(data);
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
          <ProductHeader />
          <LoadContent
            basket={basket}
            location={location}
            data={data}
            category={category}
            product={product}
            orderAmount={orderAmount}
            setOrderAmount={setOrderAmount}
          />
        </ProductPageWrapp>
      )}
    </>
  );
};
export default ProductElement;
