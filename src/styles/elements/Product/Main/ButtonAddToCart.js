import styled from 'styled-components';

export const ButtonAddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: hsl(26, 100%, 55%);
  color: white;
  font-weight: 700;
  transition: 0.3s;
  img {
    filter: brightness(100);
  }
  &:active {
    background-color: #4ade80;
  }
`;
