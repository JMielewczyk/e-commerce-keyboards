import styled from 'styled-components';

export const StartWrapp = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  transition: 0.5s;
  &.active {
    transform: translateX(101vw);
  }
`;
