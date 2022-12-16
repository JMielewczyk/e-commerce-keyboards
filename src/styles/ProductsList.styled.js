import styled from "styled-components";

export const StyledProductsList = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  .product-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-color: cadetblue;
    border-radius: 20px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    &__image-wrapper {
      width: 100%;
      height: 300px;
      overflow: hidden;
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      padding-top: 5%;
      padding-left: 15px;
      .product-name {
        font-size: 1.5rem;
      }
    }
  }
`;
