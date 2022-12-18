import styled from 'styled-components';

export const LinkContainerImage = styled.div`
  width: 100%;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-decoration: none;
    color: white;
  }
`;
