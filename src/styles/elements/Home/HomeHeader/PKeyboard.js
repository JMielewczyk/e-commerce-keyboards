import styled from 'styled-components';
import { device } from '../../../mediaQueries/breakpoints';
import { P20 } from '../../P20';

export const PKeyboard = styled(P20)`
  color: white;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.mobileM} {
    font-size: 1.5rem;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;
