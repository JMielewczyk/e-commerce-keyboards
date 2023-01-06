import styled from 'styled-components';
import { RowContainerBR0 } from './RowContainerBR0';

export const Amount = styled(RowContainerBR0)`
  position: absolute;
  top: 0;
  right: -30%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 100%;
  background-color: red;
  z-index: 2;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: white;
  overflow: hidden;
`;
