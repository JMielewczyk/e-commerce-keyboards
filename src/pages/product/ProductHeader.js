//Hooks
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Loading from '../../components/Loading';

//Functions
import LoadHeader from './functions/LoadHeader';
import { fetchData } from '../../utils/fetchData';

const Header = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { product, category } = useParams();
  const [imageIndex, setImageIndex] = useState(0);

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
        <LoadHeader
          loading={loading}
          data={data}
          product={product}
          imageIndex={imageIndex}
          fetchData={fetchData}
          category={category}
          setImageIndex={setImageIndex}
        />
      )}
    </>
  );
};

export default Header;
