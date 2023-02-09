import styled from 'styled-components';

export const BlurredImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  filter: blur(3px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
