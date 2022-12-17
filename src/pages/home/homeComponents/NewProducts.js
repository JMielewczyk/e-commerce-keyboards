//Hooks
import React, { useState, useEffect } from 'react';

//Components
import Loading from '../../../components/Loading';
import LoadNewProducts from '../functions/LoadNewProducts';

//Styles
import { StyledNewProducts } from '../../../styles/NewProducts.styled';

//Functions
import { fetchData } from '../../../utils/fetchData';

const NewProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <StyledNewProducts>
          <p className="newArrivals-txt">New Arrivals</p>
          <div className="newProducts-container">
            <LoadNewProducts data={data} />
          </div>
        </StyledNewProducts>
      )}
    </>
  );
};

export default NewProducts;
