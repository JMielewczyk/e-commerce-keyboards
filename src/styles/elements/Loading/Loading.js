import styled from 'styled-components';
import { Wrapper } from '../Wrapper';

export const Loading = styled(Wrapper)`
  max-height: 30%;
  font-size: 2rem;
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    border: 10px solid #ddd;
    border-top-color: grey;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
