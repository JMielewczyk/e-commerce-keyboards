import React from 'react';
import { Link } from 'react-router-dom';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartProductWrapp } from '../../styles/elements/Nav/CartProductWrapp';
import { LinkImageWrapp } from '../../styles/elements/Nav/LinkImageWrapp';
import { Img } from '../../styles/elements/Img';
import { DivBack } from '../../styles/elements/DivBack';
import { RowContainerBR0 } from '../../styles/elements/Nav/RowContainerBR0';
import { P10 } from '../../styles/elements/P10';

const CartContent = ({ basket, dispatch }) => {
  if (basket.length === 1)
    return (
      <>
        <P10>Your basket is empty</P10>
      </>
    );

  const renderBasket = basket.map((item, index) => {
    if (index === 0) return;

    return (
      <CartProductWrapp key={item.name}>
        <div>
          <P10>{item.name}</P10>
          <P10>Quantity: {item.quantity}</P10>
          <P10>Total price: {item.price}</P10>
        </div>
        <LinkImageWrapp>
          <Link to={item.path}>
            <DivBack style={{ backgroundImage: `url(${item.image})` }}></DivBack>
            <Img src={item.image} alt={`${item.name} in cart`} />
          </Link>
        </LinkImageWrapp>
        <RowContainerBR0 onClick={() => dispatch({ type: 'delete', payload: { name: item.name } })}>
          <FontAwesomeIcon icon={faTrash} />
        </RowContainerBR0>
      </CartProductWrapp>
    );
  });
  return <>{renderBasket}</>;
};

export default CartContent;
