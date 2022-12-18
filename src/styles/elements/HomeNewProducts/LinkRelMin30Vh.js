import styled from 'styled-components';

export const LinkRelMin30Vh = styled.div`
  position: relative;
  width: 100%;
  min-height: 30vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  z-index: 1;
  a {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
