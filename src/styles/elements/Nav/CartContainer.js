import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  background-color: white;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  transform: translateY(-100vh);
  border: 1px solid black;
  &.active {
    transform: translateY(0);
  }
  /* @media ${device.mobileL} {
    left: unset;
    right: 20px;
    width: 75%;
  }
  @media ${device.tablet} {
    left: unset;
    right: 20px;
    width: 45%;
  }
  @media ${device.laptop} {
    left: unset;
    right: 20px;
    width: 35%;
  }
  @media ${device.desktop} {
    left: unset;
    right: 20px;
    width: 25%;
  } ; */
`;
