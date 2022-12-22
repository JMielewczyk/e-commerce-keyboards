import styled from 'styled-components';
import { device } from '../../../mediaQueries/breakpoints';

export const AboutWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: about;
  border-radius: 8px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 8px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  height: 30vh;
  p {
    text-align: center;
  }
  @media ${device.tablet} {
    height: unset;
  }
`;
