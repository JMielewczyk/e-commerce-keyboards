import styled from 'styled-components';

export const CartOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;
  max-height: calc(
    100% - 100px
  ); // 100px is the summary height of cart header and cart summary elements
  justify-content: start;
  align-items: center;
  font-weight: 700;
  color: hsl(219, 9%, 45%);
  overflow: scroll;
`;
