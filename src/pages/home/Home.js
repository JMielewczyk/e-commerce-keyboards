import React from "react";

//Components
import StartLayer from "./homeComponents/StartLayer";
import Header from "./homeComponents/Header";
import Main from "./homeComponents/Main";
import About from "./homeComponents/About";
import NewProducts from "./homeComponents/NewProducts";
import AdditionalInfo from "./homeComponents/AdditionalInfo";

//Styles
import { StyledHome } from "../../styles/Home.styled";
import { StyledHomeHeader } from "../../styles/HomeHeader.styled";
import { StyledMain } from "../../styles/Main.styled";

const HomePage = () => {
  return (
    <>
      <StyledHome>
        <StartLayer />
        <StyledHomeHeader>
          <Header />
        </StyledHomeHeader>
        <StyledMain>
          <Main />
        </StyledMain>
        <NewProducts />
        <AdditionalInfo />
        <About />
      </StyledHome>
    </>
  );
};

export default HomePage;
