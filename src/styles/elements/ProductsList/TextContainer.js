import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding-left: 10px;
  & p {
    color: white;
  }
  @media ${device.mobileM} {
    gap: 10px;
    padding: 10px;
  }
  @media ${device.tablet} {
    padding: 20px;
  }
`;
