import styled from 'styled-components';

export const A20StylesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  flex-shrink: 0;
  & a {
    color: black;
    font-size: 2rem;
    text-decoration: none;
  }
`;
