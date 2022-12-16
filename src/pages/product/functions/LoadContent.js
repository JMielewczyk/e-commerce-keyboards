import React, { useContext } from "react";

//Context
import { BackgroundContext } from "../../../App";

//Images
import minus from "../../../assets/icons/icon-minus.svg";
import plus from "../../../assets/icons/icon-plus.svg";
import cart from "../../../assets/icons/icon-cart.svg";

//Functions
import { handleAmount } from "./handleAmount";
import { addToCart } from "./addToCart";

const LoadContent = ({
  basket,
  location,
  data,
  category,
  product,
  orderAmount,
  setOrderAmount,
}) => {
  const { dispatch } = useContext(BackgroundContext);

  const allElements = data[category].map((item) => {
    if (item.name === product) {
      const actualPrice = () => {
        const price = item.price - item.price * (item.discountValue / 100);
        price.toFixed(2);
        return price;
      };
      if (item.discount) {
        return (
          <div className="product-wrapper" key={item.name}>
            <p className="product-category">{category}</p>
            <h2 className="product-title">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <div key={item.name} className="price-container">
              <div className="discounted-price-container">
                <p className="actual-price">{item.currency + actualPrice()}</p>
                <p className="discount">{item.discountValue + "%"}</p>
              </div>
              <p className="old-price">
                {item.currency + item.price.toFixed(2)}
              </p>
            </div>
            <div className="amount-container">
              <img
                onClick={() =>
                  handleAmount(orderAmount, setOrderAmount, "minus")
                }
                src={minus}
                alt=""
              />
              <p className="amount">{orderAmount}</p>
              <img
                onClick={() =>
                  handleAmount(orderAmount, setOrderAmount, "plus")
                }
                src={plus}
                alt=""
              />
            </div>
            <button
              className="addToCartBtn"
              onClick={() =>
                addToCart(
                  basket,
                  location,
                  data,
                  category,
                  orderAmount,
                  product,
                  dispatch
                )
              }
            >
              <img src={cart} alt="" />
              Add to cart
            </button>
          </div>
        );
      } else {
        return (
          <div className="product-wrapper" key={item.name}>
            <p className="product-category">{category}</p>
            <h2 className="product-title">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <p className="actual-price">
              {item.currency + item.price.toFixed(2)}
            </p>
            <div className="amount-container">
              <img
                onClick={() =>
                  handleAmount(orderAmount, setOrderAmount, "minus")
                }
                src={minus}
                alt=""
              />
              <p className="amount">{orderAmount}</p>
              <img
                onClick={() =>
                  handleAmount(orderAmount, setOrderAmount, "plus")
                }
                src={plus}
                alt=""
              />
            </div>
            <button
              className="addToCartBtn"
              onClick={() =>
                addToCart(
                  basket,
                  location,
                  data,
                  category,
                  orderAmount,
                  product,
                  dispatch
                )
              }
            >
              <img src={cart} alt="" />
              Add to cart
            </button>
          </div>
        );
      }
    }
  });
  return allElements;
};
export default LoadContent;
