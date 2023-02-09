import React, { useContext } from 'react';

//Context
import { BackgroundContext } from '../../../App';

//Images
import minus from '../../../assets/icons/icon-minus.svg';
import plus from '../../../assets/icons/icon-plus.svg';
import cart from '../../../assets/icons/icon-cart.svg';

//Functions
import { handleAmount } from './handleAmount';
import { addToCart } from './addToCart';

//Styles
import { ContentContainer } from '../../../styles/elements/Product/Main/ContentContainer';
import { CategoryText } from '../../../styles/elements/Product/Main/CategoryText';
import { P10 } from '../../../styles/elements/P10';
import { Discount } from '../../../styles/elements/Product/Main/Discount';
import { PricesContainer } from '../../../styles/elements/Product/Main/PricesContainer';
import { RowContainerFlexStart } from '../../../styles/elements/Product/Main/RowContainerFlexStart';
import { P20 } from '../../../styles/elements/P20';
import { OldPrice } from '../../../styles/elements/Product/Main/OldPrice';
import { ButtonAddToCart } from '../../../styles/elements/Product/Main/ButtonAddToCart';
import { P10CenterBold } from '../../../styles/elements/Home/Categories/P10CenterBold';
import { ContainerToCenter } from '../../../styles/elements/Product/Main/ContainerToCenter';
import { AmountContainer } from '../../../styles/elements/Product/Main/AmountContainer';

const LoadContent = ({ basket, location, data, images, category, orderAmount, setOrderAmount }) => {
  const { dispatch } = useContext(BackgroundContext);

  const actualPrice = () => {
    const price = data.price - data.price * (data.discountValue / 100);
    price.toFixed(2);
    return price;
  };

  return (
    <ContentContainer key={data.name}>
      <CategoryText>Category: {category}</CategoryText>
      <P10>Product name : {data.name}</P10>
      <P10>Description : {data.description}</P10>
      <P10></P10>
      <PricesContainer key={data.name}>
        {data.discount && (
          <OldPrice className="old-price">{data.currency + data.price.toFixed(2)}</OldPrice>
        )}
        <RowContainerFlexStart>
          {data.discount !== true ? <P20>{data.currency + data.price.toFixed(2)}</P20> : null}
          {data.discount && <P20>{data.currency + actualPrice()}</P20>}
          {data.discount && <Discount>{data.discountValue + '%'}</Discount>}
        </RowContainerFlexStart>
      </PricesContainer>
      <ContainerToCenter>
        <AmountContainer>
          <img
            onClick={() => handleAmount(orderAmount, setOrderAmount, 'minus')}
            src={minus}
            alt="Subtract amount"
          />
          <P10CenterBold className="amount">{orderAmount}</P10CenterBold>
          <img
            onClick={() => handleAmount(orderAmount, setOrderAmount, 'plus')}
            src={plus}
            alt="Add amount"
          />
        </AmountContainer>
        <ButtonAddToCart
          className="addToCartBtn"
          onClick={() => addToCart(basket, location, data, images, orderAmount, dispatch)}>
          <img src={cart} alt="cart" />
          Add to cart
        </ButtonAddToCart>
      </ContainerToCenter>
    </ContentContainer>
  );
};
export default LoadContent;
