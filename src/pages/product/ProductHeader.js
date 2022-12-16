//Hooks
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import Loading from "../../components/Loading";

//Styles
import { StyledProductHeader } from "../../styles/ProductHeader.styled.js";

//Functions
import LoadHeader from "./functions/LoadHeader";
import { fetchData } from "./functions/fetchData";

const Header = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { product, category } = useParams();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    fetchData(setData, setLoading);
  }, []);

  return (
    <>
      {loading || data === null ? (
        <Loading />
      ) : (
        <StyledProductHeader>
          <LoadHeader
            loading={loading}
            data={data}
            product={product}
            imageIndex={imageIndex}
            fetchData={fetchData}
            category={category}
            setImageIndex={setImageIndex}
          />
        </StyledProductHeader>
      )}
    </>
  );
};

export default Header;
