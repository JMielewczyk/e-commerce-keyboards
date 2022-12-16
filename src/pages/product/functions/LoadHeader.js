import React from "react";

//Component
import Loading from "../../../components/Loading";

//Images
import next from "../../../assets/icons/icon-next.svg";
import previous from "../../../assets/icons/icon-previous.svg";

//Functions
import { nextImage } from "./changeImage";
import { previousImage } from "./changeImage";

const LoadHeader = ({
  loading,
  data,
  product,
  imageIndex,
  category,
  setImageIndex,
}) => {
  if (loading === true || data.length === 0) return <Loading />;
  else {
    const thisProduct = data[category].filter((item) => item.name === product);
    const images = thisProduct[0].images;
    return (
      <>
        <div className="image-wrapper">
          <img
            className="product-image"
            src={process.env.PUBLIC_URL + images[imageIndex]}
            alt=""
          />
        </div>
        <div
          onClick={() => nextImage(images, imageIndex, setImageIndex)}
          className="button-container-next"
        >
          <img className="button-next" src={next} alt="" />
        </div>
        <div
          onClick={() => previousImage(images, imageIndex, setImageIndex)}
          className="button-container-previous"
        >
          <img className="button-previous" src={previous} alt="" />
        </div>
      </>
    );
  }
};

export default LoadHeader;
