//Hooks
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Styles
import { ImageContainer } from '../../../styles/elements/Home/Categories/ImageContainer';
import { HomeMainWrapper } from '../../../styles/elements/Home/Categories/HomeMainWrapper';
import { P10CenterBold } from '../../../styles/elements/Home/Categories/P10CenterBold';
import { LinkWhite } from '../../../styles/elements/LinkWhite';
import { CategoriesContainer } from '../../../styles/elements/Home/Categories/CategoriesContainer';

//Images
import keyboards from '../../../assets/images/prebuilt.jpg';
import keycaps from '../../../assets/images/keycaps.jpg';
import switches from '../../../assets/images/switches.jpg';
import barebone from '../../../assets/images/barebone.jpg';

//Utils
import { Loading } from '../../../styles/elements/Loading/Loading';
import { storage } from '../../../utils/firebase';
import { listAll, ref } from 'firebase/storage';
import { BlurredImage } from '../../../styles/elements/Home/Categories/BlurredImage';

const Main = () => {
  const [fullPaths, setFullPaths] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function getCategories() {
      let fullPaths = [];
      let categories = [];
      const categoryRef = ref(storage, `products`);
      await listAll(categoryRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            fullPaths = [...fullPaths, folderRef.fullPath];
            categories = [...categories, folderRef.name];
          });
        })
        .then(() => {
          setFullPaths(fullPaths);
          setCategories(categories);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCategories();
  }, []);

  const categoryImages = [barebone, keyboards, keycaps, switches];

  const categoriesMap =
    categories !== null && fullPaths !== null ? (
      categories.map((item, index) => (
        <ImageContainer key={item}>
          <BlurredImage style={{ backgroundImage: `url(${categoryImages[index]})` }} />
          <LinkWhite>
            <Link to={`/home/${fullPaths[index].toLowerCase()}`}>{item.toUpperCase()}</Link>
          </LinkWhite>
        </ImageContainer>
      ))
    ) : (
      <Loading />
    );

  return (
    <HomeMainWrapper>
      <P10CenterBold>Building your first mechanical keyboard is easier than ever</P10CenterBold>
      <CategoriesContainer>{categoriesMap}</CategoriesContainer>
    </HomeMainWrapper>
  );
};

export default Main;
