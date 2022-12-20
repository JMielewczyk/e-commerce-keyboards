import React from 'react';
import { Amount } from '../../styles/elements/Nav/Amount';

const AmountOnBasket = ({ basket }) => {
  let amount = 0;
  basket.forEach(() => amount++);
  const element = amount > 1 ? <Amount>{amount - 1}</Amount> : null;
  return element;
};

export default AmountOnBasket;
