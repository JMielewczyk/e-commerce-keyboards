//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Wrapper } from '../../../styles/elements/Wrapper';
import { PKeyboard } from '../../../styles/elements/Home/HomeHeader/PKeyboard';
import { PPrice } from '../../../styles/elements/Home/HomeHeader/PPrice';
import { P20 } from '../../../styles/elements/P20';
import { RowContainerRelative } from '../../../styles/elements/Home/HomeHeader/RowContainerRelative';
import { ImgAbsolute } from '../../../styles/elements/ImgAbsolute';
import { DivBack } from '../../../styles/elements/DivBack';
import { RowContainer } from '../../../styles/elements/RowContainer';

const LoadHeader = ({ data, productIndex }) => {
  return (
    <Wrapper key={Math.floor(Math.random() * 1000000)}>
      <P20>Featured product:</P20>
      <RowContainer>
        <Link
          key={data[productIndex].name}
          to={`/home/${data[productIndex].category}/${data[productIndex].name}`}>
          <RowContainerRelative>
            <ImgAbsolute
              src={process.env.PUBLIC_URL + data[productIndex].imageTemplate}
              alt={`${data[productIndex].name}`}
            />
            <PKeyboard>{data[productIndex].name}</PKeyboard>
            <PPrice>{data[productIndex].currency + data[productIndex].price}</PPrice>
            <DivBack
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + data[productIndex].imageTemplate})`
              }}></DivBack>
          </RowContainerRelative>
        </Link>
      </RowContainer>
    </Wrapper>
  );
};

export default LoadHeader;
