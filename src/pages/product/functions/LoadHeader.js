import React from 'react';

//Component
import Loading from '../../../components/Loading';

//Images
import next from '../../../assets/icons/icon-next.svg';
import previous from '../../../assets/icons/icon-previous.svg';

//Functions
import { nextImage } from './changeImage';
import { previousImage } from './changeImage';

//Styles
import { HeadWrapp } from '../../../styles/elements/Product/Header/HeadWrapp';
import { ArrowContainerNext } from '../../../styles/elements/Product/Header/ArrowContainerNext';
import { Arrow } from '../../../styles/elements/Product/Header/Arrow';
import { ArrowContainerPrevious } from '../../../styles/elements/Product/Header/ArrowContainerPrevious';
import { ImgCover } from '../../../styles/elements/ImgCover';

const LoadHeader = ({ loading, data, product, imageIndex, category, setImageIndex }) => {
  if (loading === true || data.length === 0) return <Loading />;
  else {
    const thisProduct = data[category].filter((item) => item.name === product);
    const images = thisProduct[0].images;

    return (
      <HeadWrapp>
        <ImgCover src={images[imageIndex]} alt="" />
        <ArrowContainerNext onClick={() => nextImage(images, imageIndex, setImageIndex)}>
          <Arrow src={next} alt="next image arrow" />
        </ArrowContainerNext>
        <ArrowContainerPrevious onClick={() => previousImage(images, imageIndex, setImageIndex)}>
          <Arrow src={previous} alt="previous image arrow" />
        </ArrowContainerPrevious>
      </HeadWrapp>
    );
  }
};

export default LoadHeader;
