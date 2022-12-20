import styled from 'styled-components';

export const LinkImageWrapp = styled.div`
  position: relative;
  width: 150px;
  height: 100%;
  overflow: hidden;
  margin: 0 20px 0 20px;
  border-radius: 8px;
  flex-grow: 1;
  z-index: 5;
  & a {
    width: 100%;
    height: 100%;
  }
`;
