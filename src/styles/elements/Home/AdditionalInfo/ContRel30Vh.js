import styled from 'styled-components';
import { device } from '../../../mediaQueries/breakpoints';

export const ContRel30Vh = styled.div`
  display: grid;
  grid-area: info;
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.4);
  @media ${device.tablet} {
    height: unset;
  }
`;
