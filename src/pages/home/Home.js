import React from 'react';

//Components
import StartLayer from './homeComponents/StartLayer';
import Header from './homeComponents/Header';
import Main from './homeComponents/Main';
import About from './homeComponents/About';
import NewProducts from './homeComponents/NewProducts';
import AdditionalInfo from './homeComponents/AdditionalInfo';

const HomePage = () => {
  return (
    <>
      <StartLayer />
      <Header />
      <Main />
      <NewProducts />
      <AdditionalInfo />
      <About />
    </>
  );
};

export default HomePage;
