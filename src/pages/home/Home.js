import React from 'react';

//Components
import StartLayer from './homeComponents/StartLayer';
import Header from './homeComponents/Header';
import Main from './homeComponents/Categories';
import About from './homeComponents/About';
import NewProducts from './homeComponents/NewProducts';
import AdditionalInfo from './homeComponents/AdditionalInfo';

//Styles
import { GridWrapp } from '../../styles/elements/Home/GridWrapp';

const HomePage = () => {
  return (
    <>
      <StartLayer />
      <GridWrapp>
        <Header />
        <Main />
        <NewProducts />
        <AdditionalInfo />
        <About />
      </GridWrapp>
    </>
  );
};

export default HomePage;
