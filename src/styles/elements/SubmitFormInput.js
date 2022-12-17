import styled from 'styled-components';
import { Input } from './Input';

export const SubmitFormInput = styled(Input)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 5px;
  letter-spacing: 1px;
  font-weight: 700;
  background-color: #059669;
  color: white;
  transition: 0.1s;
  height: 50px;
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 7px 1px black;
  }
`;
