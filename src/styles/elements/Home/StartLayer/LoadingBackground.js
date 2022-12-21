import styled from 'styled-components';

import backgroundImage from '../../../../assets/images/start-background-light.jpg';

export const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 3;
  transition: 0.3s;
  & div {
    max-height: 100vh;
    background-color: transparent;
    background-image: url(${backgroundImage});
    border-radius: 0;
  }
  &.active {
    transform: translateX(100vw);
  }
`;
