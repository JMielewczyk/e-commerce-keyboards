import styled from 'styled-components';
import { device } from '../mediaQueries/breakpoints';
import { P10 } from './P10';

export const P20 = styled(P10)`
  font-size: 2rem;
  @media ${device.mobileS} {
    font-size: 1.8rem;
  }
`;
