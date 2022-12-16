//Hooks
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Loading from '../../components/Loading';
import LoadContent from './functions/LoadContent';

//Styles
import { StyledProductsList } from '../../styles/ProductsList.styled';

//Functions
import { fetchData } from '../../utils/fetchData';

const ProductList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

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
      {loading === true || data === null ? (
        <Loading />
      ) : (
        <StyledProductsList>
          <LoadContent data={data} category={category} />
        </StyledProductsList>
      )}
    </>
  );
};

export default ProductList;
