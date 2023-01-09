import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const ProductsListWrapp = styled.main`
  display: grid;
  width: 100%;
  max-width: 2000px;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;
  overflow: visible;
  @media ${device.mobileM} {
    gap: 50px;
  }
`;
