import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  overflow: hidden;
`;
