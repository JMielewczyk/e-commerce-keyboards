import styled from 'styled-components';

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  grid-area: footer;
  width: 100vw;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  border-radius: 5% 5% 0 0;
  p {
    max-width: 50%;
  }
`;
