//Hooks
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Styles
import { ProductWrapp } from '../../../styles/elements/ProductsList/ProductWrapp';
import { ImageContainer } from '../../../styles/elements/ProductsList/ImageContainer';
import { ImgCover } from '../../../styles/elements/ImgCover';
import { TextContainer } from '../../../styles/elements/ProductsList/TextContainer';
import { P15 } from '../../../styles/elements/P15';

//Firebase
import { listAll, ref } from 'firebase/storage';
import { storage } from '../../../utils/firebase';

const LoadContent = ({ data, images, category }) => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    async function getProducts() {
      return new Promise((resolve) => {
        let productsInCategory = [];
        const listRef = ref(storage, `products/${category}`);
        listAll(listRef)
          .then((res) => {
            res.prefixes.forEach((folderRef) => {
              productsInCategory = [...productsInCategory, folderRef.fullPath];
            });
          })
          .then(() => {
            resolve(productsInCategory);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
    async function loadLinks() {
      const links = await getProducts();
      setLinks(links);
    }
    loadLinks();
  }, []);

  const productsList = data.map((item, index) => {
    return (
      <ProductWrapp key={item.name}>
        <Link to={`/home/${links !== null ? links[index] : ''}`}>
          <ImageContainer>
            <ImgCover src={images[index][0]} alt="" />
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
