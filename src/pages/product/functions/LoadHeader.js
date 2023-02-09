import React, { useState, useEffect } from 'react';

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
import { P20AbsBottom } from '../../../styles/elements/Product/Header/P20AbsBottom';

const LoadHeader = ({ loading, images, imageIndex, setImageIndex }) => {
  const [imageCounter, setImageCounter] = useState(0);

  useEffect(() => {
    let index = imageIndex;
    index++;
    setImageCounter(index);
  }, [imageIndex]);

  if (loading === true || images.length === 0) return <Loading />;
  else {
    return (
      <HeadWrapp>
        <ImgCover src={images[imageIndex]} alt="" />
        <ArrowContainerNext onClick={() => nextImage(images, imageIndex, setImageIndex)}>
          <Arrow src={next} alt="next image arrow" />
        </ArrowContainerNext>
        <ArrowContainerPrevious onClick={() => previousImage(images, imageIndex, setImageIndex)}>
          <Arrow src={previous} alt="previous image arrow" />
        </ArrowContainerPrevious>
        <P20AbsBottom>{`${imageCounter}/${images.length}`}</P20AbsBottom>
      </HeadWrapp>
    );
  }
};

export default LoadHeader;
