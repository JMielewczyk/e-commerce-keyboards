import styled from 'styled-components';
import { Wrapper } from '../../Wrapper';

export const NewProductsWrapp = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  grid-area: newProducts;
  padding-right: 5px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`;
