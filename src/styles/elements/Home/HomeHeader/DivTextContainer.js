import styled from 'styled-components';
import { device } from '../../../mediaQueries/breakpoints';

export const DivTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: absolute;
  width: 100%;
  height: 35%;
  bottom: 0;
  left: 0;
  z-index: 1;
  /* padding-left: 10px; */
  background-color: rgba(0, 0, 0, 0.8);
  @media ${device.mobileM} {
    height: 30%;
  }
  @media ${device.tablet} {
    height: 30%;
    min-height: 110px;
  }
`;
