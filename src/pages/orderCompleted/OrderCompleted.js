//Hooks
import React from 'react';

//Styles
import { P15 } from '../../styles/elements/P15';
import { CartWrapp } from '../../styles/elements/CartWrapp';
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';
import { Link } from 'react-router-dom';
import { LinkStylesGreen } from '../../styles/elements/LinkStylesGreen';

const OrderCompleted = () => {
  return (
    <WrappFlexGrow>
      <CartWrapp>
        <P15>Order completed!</P15>
        <LinkStylesGreen>
          <Link to="/home">Return to home page</Link>
        </LinkStylesGreen>
      </CartWrapp>
    </WrappFlexGrow>
  );
};

export default OrderCompleted;
