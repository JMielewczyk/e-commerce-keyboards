import styled from 'styled-components';

export const StartLayoutFix = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  transition: 2s;
  &.active {
    transform: translateX(100vw);
  }
`;
