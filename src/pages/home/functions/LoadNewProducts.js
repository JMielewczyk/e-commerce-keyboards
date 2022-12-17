import React from 'react';
import { Link } from 'react-router-dom';

const LoadNewProducts = ({ data }) => {
  let newProducts = [];
  Object.entries(data).forEach(([category, value]) => {
    value.forEach((object) => {
      Object.entries(object).forEach((key) => {
        if (key[0] === 'newProduct' && key[1] === true) {
          object.category = category;
          newProducts.push(object);
        }
        return;
      });
    });
  });
  const mapNewProducts = newProducts.map((element) => {
    return (
      <Link
        style={{ backgroundImage: `url(${element.imageTemplate})` }}
        className="newProduct-container"
        key={element.name}
        to={`/home/${element.category}/${element.name}`}>
        <div className="container">
          <div className="background-blur"></div>
          <div className="product-container">
            <p className="product-name">{element.name}</p>
          </div>
        </div>
      </Link>
    );
  });
  return <>{mapNewProducts}</>;
};

export default LoadNewProducts;
