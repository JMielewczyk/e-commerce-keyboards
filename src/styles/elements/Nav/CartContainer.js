import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  max-height: 80%;
  position: absolute;
  top: 7%;
  left: 10px;
  z-index: 2;
  background-color: white;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  transform: translateY(-100vh);
  border: 1px solid black;
  &.active {
    transform: translateY(0);
  }
`;
