import styled from 'styled-components';
import { device } from '../../mediaQueries/breakpoints';

export const NavWrap = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100vw;
  max-width: 2000px;
  overflow: visible;
  padding: 10px;
  @media ${device.mobileM} {
    gap: 20px;
    padding: 10px 0 10px 0;
    width: 100%;
  }
`;
