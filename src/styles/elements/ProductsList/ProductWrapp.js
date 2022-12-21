import styled from 'styled-components';

export const ProductWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 50vh;
  overflow: hidden;
  background-color: cadetblue;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  & a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    overflow: hidden;
  }
`;
