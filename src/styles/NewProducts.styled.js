import styled from "styled-components";

export const StyledNewProducts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .newArrivals-txt {
    font-size: 2rem;
    font-weight: 700;
    overflow: hidden;
  }
  .newProducts-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-height: 75vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-track {
      background-color: #e6e6e6;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background: #8070d4;
      border: 4px solid rgba(230, 230, 230, 1);
    }
  }
  .newProduct-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px;
    padding-bottom: 10px;
    width: 100%;
    min-height: 250px;
    background-position: center;
    background-size: cover;
    text-decoration: none;
    color: black;
    .container {
      position: relative;
      width: 100%;
      height: 4rem;
      overflow: hidden;
    }
    .background-blur {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0.7;
      border-radius: 8px;
      border: 1px solid black;
    }
    .product-container {
      position: absolute;
      padding: 10px;
    }
    .product-name {
      color: black;
      font-size: 2rem;
    }
  }
`;
