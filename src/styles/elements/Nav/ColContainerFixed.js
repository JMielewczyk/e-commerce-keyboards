import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const ColContainerFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: white;
  height: 80vh;
  width: 90%;
  max-width: 300px;
  padding: 20px;
  border-radius: 0 0 200px 0;
  transform: translateX(-101vw);
  transition: 0.3s;
  &.active {
    transform: translateX(0);
  }
  @media ${device.mobileM} {
    width: 75%;
    height: 65vh;
  }
`;
