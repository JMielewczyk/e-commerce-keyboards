import React from 'react';
import { Link } from 'react-router-dom';

const LoadHeader = ({ data, productIndex }) => {
  return (
    <div key={Math.floor(Math.random() * 1000000)} className="featured-wrapper">
      <div className="featured-text-container">
        <h3 className="featured-text">Featured keyboards</h3>
      </div>
      <Link
        className="featured-product-container"
        key={data[productIndex].name}
        to={`/home/${data[productIndex].category}/${data[productIndex].name}`}>
        <div className="featured-product">
          <img
            src={process.env.PUBLIC_URL + data[productIndex].imageTemplate}
            alt={`${data[productIndex].name}`}
          />
          <p className="keyboard-model">{data[productIndex].name}</p>
          <p className="price">{data[productIndex].currency + data[productIndex].price}</p>
          <div
            className="featured-product-background"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + data[productIndex].imageTemplate})`
            }}></div>
        </div>
      </Link>
    </div>
  );
};

export default LoadHeader;
