import styled from 'styled-components';

export const CartSummary = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 50px;
  bottom: 0;
  left: 0;
  border-top: 1px solid hsl(220, 14%, 75%);
  & p,
  a {
    display: flex;
    flex-grow: 1;
    height: 50px;
    justify-content: center;
    align-items: center;
  }
  & a {
    text-decoration: none;
    color: black;
    border-left: 1px solid black;
  }
`;
