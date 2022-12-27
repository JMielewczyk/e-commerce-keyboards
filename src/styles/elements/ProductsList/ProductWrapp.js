import styled from 'styled-components';

export const ProductWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 30vh;
  max-height: 350px;
  overflow: hidden;
  background-color: cadetblue;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  & a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    overflow: hidden;
  }
`;
