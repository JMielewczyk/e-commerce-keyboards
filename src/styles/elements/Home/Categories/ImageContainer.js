import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;

  border-radius: 8px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-decoration: none;
  }
`;
