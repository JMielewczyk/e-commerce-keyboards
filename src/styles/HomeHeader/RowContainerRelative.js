import styled, { keyframes } from 'styled-components';
import { RowContainer } from '../elements/RowContainer';

const featuredAnimation = keyframes`
        0% {
            transform: translateX(-100vw);
            opacity: 0;
            visibility: hidden;
        }
        5% {
            opacity: 0;
        }
        15% {
            transform: translate(0);
            visibility: visible;
            opacity: 1;
        }
        85% {
            transform: translateX(0);
            visibility: visible;
            opacity: 1;
        }
        95% {
            opacity: 0;
        }
        100% {
            transform: translateX(100vw);
            visibility: hidden;
            opacity: 0;
        }
`;
export const RowContainerRelative = styled(RowContainer)`
  position: relative;
  width: 90vw;
  height: 35vh;
  z-index: 1;
  animation: ${featuredAnimation} 3s;
  overflow: hidden;
  visibility: hidden;
`;
