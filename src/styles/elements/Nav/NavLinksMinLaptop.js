import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const NavLinksMinLaptop = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 8px;
    padding: 0 10px 0 10px;
    color: black;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
  }
  a.active {
    background: rgba(52, 211, 153, 1);
  }
  @media ${device.tablet} {
    display: flex;
    gap: 10px;
  }
`;
