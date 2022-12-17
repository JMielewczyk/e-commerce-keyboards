import styled from 'styled-components';

export const KeyboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #e0e0d1;
  color: grey;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  border-right: 5px solid #bdbdaf;
  border-bottom: 5px solid #ccccbe;
  border-left: 5px solid #adada1;
  border-top: 5px solid #adada1;
  box-shadow: 0 0 7px black;
  transition: 0.1s;
  &:active {
    transform: translateX(-1%) scale(0.95);
    box-shadow: 0 0 7px 1px black;
  }
`;
