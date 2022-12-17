import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  height: 50px;
  min-width: 120px;
  border: none;
  border-radius: 8px;
  background-color: #c53030;
  font-weight: 700;
  &:active {
    transform: translateX(-1%) scale(0.95);
    box-shadow: 0 0 7px 1px black;
  }
`;
