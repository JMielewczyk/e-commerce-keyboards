import styled from 'styled-components';

export const HomeMainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-area: category;
  gap: 20px;
  padding: 20px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 8px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`;
