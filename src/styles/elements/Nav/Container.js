import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 40%);
  transform: translateX(-101vw);
  border-radius: 0 0 30px 30px;
  &.active {
    transform: translateX(0);
  }
  @media ${device.maxMobileL} {
    width: 100%;
  } ;
`;
