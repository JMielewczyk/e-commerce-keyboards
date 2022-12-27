import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const HamburgerMenu = styled.img`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  @media ${device.tablet} {
    display: none;
  }
`;
