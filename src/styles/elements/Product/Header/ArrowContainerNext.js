import styled from 'styled-components';

export const ArrowContainerNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 100%;
  opacity: 0.8;
  cursor: pointer;
  transition: 0.1s;
  &:active {
    transform: translate(20%, -50%);
  }
`;
