//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { ProductWrapp } from '../../../styles/elements/ProductsList/ProductWrapp';
import { ImageContainer } from '../../../styles/elements/ProductsList/ImageContainer';
import { ImgCover } from '../../../styles/elements/ImgCover';
import { TextContainer } from '../../../styles/elements/ProductsList/TextContainer';
import { P15 } from '../../../styles/elements/P15';

const LoadContent = ({ data, category }) => {
  const productsList = data[category].map((item) => {
    return (
      <ProductWrapp key={item.name}>
        <Link to={`/home/${category.toLowerCase()}/${item.name}`}>
          <ImageContainer>
            <ImgCover src={item.imageTemplate} alt="" />
          </ImageContainer>
          <TextContainer>
            <P15>Product : {item.name}</P15>
            <p>
              Price: {item.price}
              {item.currency}
            </p>
          </TextContainer>
        </Link>
      </ProductWrapp>
    );
  });
  return <>{productsList}</>;
};

export default LoadContent;
