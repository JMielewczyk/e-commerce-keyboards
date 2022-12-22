import styled from 'styled-components';

import { device } from '../../../mediaQueries/breakpoints';

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 75vh;
  overflow-y: scroll;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #e6e6e6;
    border-radius: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: transparent;
    border: 4px solid rgba(0, 0, 0, 0.3);
  }
  @media ${device.tablet} {
    max-height: 115vh;
  }
  @media ${device.laptop} {
    max-height: 125vh;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    &::-webkit-scrollbar {
      width: 0;
    }
  } ;
`;
