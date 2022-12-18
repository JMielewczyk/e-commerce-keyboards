import styled from 'styled-components';

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 75vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #e6e6e6;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: #8070d4;
    border: 4px solid rgba(230, 230, 230, 1);
  }
`;
