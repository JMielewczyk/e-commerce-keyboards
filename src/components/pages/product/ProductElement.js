//Hooks
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

//Components
import ProductHeader from "./ProductHeader";
import Loading from "../../Loading";

//Styles
import { StyledProductElement } from "../../styles/ProductElement.styled";

//Functions
import { fetchData } from "./functions/fetchData";
import LoadContent from "./functions/LoadContent";

const ProductElement = ({ basket }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderAmount, setOrderAmount] = useState(0);
  const { category, product } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchData(setData, setLoading);
  }, []);

  return (
    <>
      {loading || data === null ? (
        <Loading />
      ) : (
        <StyledProductElement>
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
        </StyledProductElement>
      )}
    </>
  );
};
export default ProductElement;
