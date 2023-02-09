//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { MainHeadWrapp } from '../../../styles/elements/Home/HomeHeader/MainHeadWrapp';
import { PKeyboard } from '../../../styles/elements/Home/HomeHeader/PKeyboard';
import { PPrice } from '../../../styles/elements/Home/HomeHeader/PPrice';
import { P20 } from '../../../styles/elements/P20';
import { RowContainerRelative } from '../../../styles/elements/Home/HomeHeader/RowContainerRelative';
import { ImgAbsolute } from '../../../styles/elements/ImgAbsolute';
import { DivBack } from '../../../styles/elements/DivBack';
import { RowContainer } from '../../../styles/elements/RowContainer';
import { DivTextContainer } from '../../../styles/elements/Home/HomeHeader/DivTextContainer';

const LoadHeader = ({ data, images, path }) => {
  return (
    <MainHeadWrapp key={Math.floor(Math.random() * 1000000)}>
      <P20>Featured product:</P20>
      <RowContainer>
        <Link to={`/home/${path}`}>
          <RowContainerRelative>
            <ImgAbsolute src={images[0]} alt={data.name} />
            <DivTextContainer>
              <PKeyboard>{data.name}</PKeyboard>
              <PPrice>{data.currency + data.price}</PPrice>
            </DivTextContainer>
            <DivBack
              style={{
                backgroundImage: `url(${images[0]})`
              }}></DivBack>
          </RowContainerRelative>
        </Link>
      </RowContainer>
    </MainHeadWrapp>
  );
};

export default LoadHeader;
