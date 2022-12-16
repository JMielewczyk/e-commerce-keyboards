import React from 'react';
import { Link } from 'react-router-dom';

const LoadContent = ({ data, category }) => {
  const productsList = data[category].map((item) => {
    return (
      <Link
        key={item.name}
        to={`/home/${category.toLowerCase()}/${item.name}`}
        className="product-wrapper">
        <div className="product-wrapper__image-wrapper">
          <img className="image" src={item.imageTemplate} alt="" />
        </div>
        <div className="product-wrapper__text-wrapper">
          <p className="product-name">{item.name}</p>
          <p className="product-price">
            Price: {item.price}
            {item.currency}
          </p>
        </div>
      </Link>
    );
  });
  return <>{productsList}</>;
};

export default LoadContent;
