import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../../../components/Loading";

import { StyledNewProducts } from "../../../styles/NewProducts.styled";

const NewProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    fetch("/data.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data.products))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  const loadContent = () => {
    if (loading === true) return <Loading />;
    const categories = Object.keys(data).filter(() => true);
    let allElements = categories.map((category) => data[category]);
    let filteredNewProducts = [];
    let matchedCategories = [];
    allElements.forEach((element, index) => {
      element.forEach((item) => {
        Object.keys(item).forEach((property) => {
          if (property === "newProduct") {
            if (item[property] === true) {
              matchedCategories.push(categories[index]);
              filteredNewProducts.push(item);
            }
          }
        });
      });
    });
    const MapProducts = filteredNewProducts.map((element, index) => {
      return (
        <Link
          style={{ backgroundImage: `url(${element.imageTemplate})` }}
          className="newProduct-container"
          key={element.name}
          to={`/home/${matchedCategories[index]}/${element.name}`}
        >
          <div className="container">
            <div className="background-blur"></div>
            <div className="product-container">
              <p className="product-name">{element.name}</p>
            </div>
          </div>
        </Link>
      );
    });
    return MapProducts;
  };
  return (
    <StyledNewProducts>
      <p className="newArrivals-txt">New Arrivals</p>
      <div className="newProducts-container">{loadContent()}</div>
    </StyledNewProducts>
  );
};

export default NewProducts;
