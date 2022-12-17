import styled from 'styled-components';

export const LinkStyles = styled.div`
  padding: 5px;
  height: 50px;
  min-width: 120px;
  border: none;
  border-radius: 8px;
  background-color: #c53030;
  font-weight: 700;
  user-select: none;
  transition: 0.1s;
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 7px 1px black;
  }
  & a {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
  }
`;
