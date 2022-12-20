import styled from 'styled-components';

export const DivBackFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 40%);
  width: 100vw;
  height: 100vh;
  transform: translateX(-101vw);
  &.active {
    transform: translateX(0);
  }
`;
