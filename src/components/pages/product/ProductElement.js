//Hooks
import React, { useEffect, useState, createContext } from "react";
import { useParams, useLocation } from "react-router-dom";

//Components
import ProductHeader from "./ProductHeader";
import Loading from "../../Loading";

//Styles
import { StyledProductElement } from "../../styles/ProductElement.styled";

//Functions
import { fetchData } from "./functions/fetchData";
import LoadContent from "./functions/LoadContent";

//Context
export const ProductElementContext = createContext(null);

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
        <ProductElementContext.Provider
          value={{
            basket,
            location,
            data,
            category,
            product,
            orderAmount,
            setOrderAmount,
          }}
        >
          <StyledProductElement>
            <ProductHeader />
            <LoadContent />
          </StyledProductElement>
        </ProductElementContext.Provider>
      )}
    </>
  );
};
export default ProductElement;
