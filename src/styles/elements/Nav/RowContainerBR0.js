import styled from 'styled-components';
import { RowContainer } from '../RowContainer';
import { device } from '../../mediaQueries/breakpoints';

export const RowContainerBR0 = styled(RowContainer)`
  border-radius: 0;
  gap: 5px;
  @media ${device.mobileS} {
    gap: 15px;
  }
  @media ${device.mobileM} {
    gap: 20px;
  }
`;
