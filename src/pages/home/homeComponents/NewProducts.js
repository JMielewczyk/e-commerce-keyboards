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
        <NewProductsWrapp>
          <P20>New arrivals</P20>
          <ScrollContainer>
            <LoadNewProducts data={data} />
          </ScrollContainer>
        </NewProductsWrapp>
      )}
    </>
  );
};

export default NewProducts;
