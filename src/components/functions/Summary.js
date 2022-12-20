import React from 'react';
import { Link } from 'react-router-dom';
import { CartSummary } from '../../styles/elements/Nav/CartSummary';
import { P10 } from '../../styles/elements/P10';

const Summary = ({ basket, isLogged }) => {
  let total = 0;
  const totalPrice = () => {
    basket.forEach((element) => {
      if (element.price === undefined) return 0;
      total += element.price;
    });
    return total;
  };
  const checkoutPath = isLogged === true ? 'shipping' : 'account';
  return (
    <>
      <CartSummary>
        <P10>Total: {totalPrice()}$</P10>
        <Link to={total === 0 ? null : checkoutPath}>Checkout</Link>
      </CartSummary>
    </>
  );
};

export default Summary;
