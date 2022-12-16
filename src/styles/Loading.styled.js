import styled from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;
  }
  .loading::before {
    content: "";
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
