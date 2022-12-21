import styled from 'styled-components';

export const KeyboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 50vw;
  transform: translateX(-50%);
  width: 150px;
  height: 60px;
  min-width: 120px;
  background-color: #e0e0d1;
  color: grey;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  border-right: 5px solid #bdbdaf;
  border-bottom: 5px solid #ccccbe;
  border-left: 5px solid #adada1;
  border-top: 5px solid #adada1;
  box-shadow: 0 0 7px black;
  transition: 0.1s;
  &:active {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 0 7px 1px black;
  }
`;
