import styled from "styled-components";

import backgroundImage from "../assets/images/start-background-light.jpg";

export const StyledStartLayer = styled.div`
  .startBackground,
  .loadingBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 2;
    transition: 0.3s;
    &.active {
      transform: translateX(100vw);
    }
  }
  .loadingBackground {
    background-image: url(${backgroundImage});
    z-index: 3;
  }
  .startLayout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 4;
    transition: 0.3s;
    &.active {
      transform: translateX(100vw);
    }
    .company-name {
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: 2rem;
    }
    .startText {
      position: absolute;
      bottom: 30vh;
      left: 50vw;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    .btnGetStarted {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 15vh;
      left: 50vw;
      transform: translateX(-50%);
      width: 150px;
      height: 60px;
      min-width: 120px;
      background-color: #e0e0d1;
      color: grey;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      border-right: 5px solid #bdbdaf;
      border-bottom: 5px solid #ccccbe;
      border-left: 5px solid #adada1;
      border-top: 5px solid #adada1;
      box-shadow: 0 0 7px black;
      transition: 0.1s;
      .enter-symbol {
        font-size: 1.4rem;
        position: absolute;
        top: 56%;
        left: 65%;
        transform: translateY(-50%);
      }
    }
    .btnGetStarted:active {
      transform: translateX(-50%) scale(0.95);
      box-shadow: 0 0 7px 1px black;
      .enter-symbol {
        transform: translateY(-49.6%);
      }
    }
  }
`;