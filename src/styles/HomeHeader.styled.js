import styled, { keyframes } from 'styled-components';

export const StyledHomeHeader = styled.header`
  width: 100%;
  .featured-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
  .featured-text-container {
    width: 100%;
  }
  .featured-product-container {
    visibility: hidden;
    text-decoration: none;
    width: 100%;
    height: 30vh;
    animation: ${featuredAnimation} 3s;
    border-radius: 20px;
  }
  .featured-product {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    overflow-y: hidden;
    .keyboard-model,
    .price {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1;
      font-size: 1.5rem;
      color: white;
    }
    .price {
      top: 55px;
    }
    .featured-product-background {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      filter: blur(10px);
    }
  }
`;
