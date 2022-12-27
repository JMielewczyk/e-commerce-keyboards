import styled from 'styled-components';

export const ProductsListWrapp = styled.main`
  display: grid;
  width: 100%;
  max-width: 2000px;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;
  overflow: visible;
`;
