import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const GridWrapp = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  padding-bottom: 20px;
  transition: 1s;
  grid-template-columns: 1fr;
  max-width: 2000px;
  overflow: visible;
  grid-template-areas:
    'featured'
    'category'
    'newProducts'
    'info'
    'about';
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 45vh 30vh 30vh 30vh 30vh 45vh;
    grid-template-areas:
      'featured category'
      'newProducts category'
      'newProducts category'
      'newProducts category'
      'newProducts about'
      'info info';
  }
  @media ${device.laptop} {
    grid-template-columns: 2fr 1.5fr 1.5fr;
    grid-template-rows: 45vh 45vh 45vh;
    grid-template-areas:
      'featured newProducts category '
      'info newProducts category'
      'about newProducts category';
  }
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 45vh 45vh 1fr;
    grid-template-areas:
      'category featured featured about'
      'category newProducts newProducts info'
      'category newProducts newProducts .';
  }
`;
