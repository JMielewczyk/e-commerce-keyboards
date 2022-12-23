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
import { P10CenterBold } from '../../../styles/elements/Home/HomeMain/P10CenterBold';
import { ContainerToCenter } from '../../../styles/elements/Product/Main/ContainerToCenter';
import { AmountContainer } from '../../../styles/elements/Product/Main/AmountContainer';

const LoadContent = ({
  basket,
  location,
  data,
  category,
  product,
  orderAmount,
  setOrderAmount
}) => {
  const { dispatch } = useContext(BackgroundContext);

  const allElements = data[category].map((item) => {
    if (item.name === product) {
      const actualPrice = () => {
        const price = item.price - item.price * (item.discountValue / 100);
        price.toFixed(2);
        return price;
      };
      return (
        <ContentContainer key={item.name}>
          <CategoryText>Category: {category}</CategoryText>
          <P10>Product name : {item.name}</P10>
          <P10>Description :</P10>
          <P10>{item.description}</P10>
          <PricesContainer key={item.name}>
            {item.discount && (
              <OldPrice className="old-price">{item.currency + item.price.toFixed(2)}</OldPrice>
            )}
            <RowContainerFlexStart>
              {item.discount !== true ? <P20>{item.currency + item.price.toFixed(2)}</P20> : null}
              {item.discount && <P20>{item.currency + actualPrice()}</P20>}
              {item.discount && <Discount>{item.discountValue + '%'}</Discount>}
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
              onClick={() =>
                addToCart(basket, location, data, category, orderAmount, product, dispatch)
              }>
              <img src={cart} alt="cart" />
              Add to cart
            </ButtonAddToCart>
          </ContainerToCenter>
        </ContentContainer>
      );
    }
  });
  return allElements;
};
export default LoadContent;
