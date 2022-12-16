import styled from "styled-components";

export const StyledShipping = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  min-height: 50vh;
  padding: 20px;
  .shipping-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #edf2f7;
    width: 100%;
    .shipping-details-txt {
      font-size: 1.5rem;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      label {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 0.9rem;
        input,
        select {
          border: none;
          border-radius: 8px;
          height: 50px;
        }
      }

      .container {
        display: flex;
        gap: 10px;
      }
      .cancel-button,
      .submit-button {
        width: 100%;
        height: 50px;
        border-radius: 8px;
      }
      .submit-button {
        border: none;
        background-color: #4299e1;
        color: white;
      }
      .cancel-button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: black;
        border: 1px solid black;
      }
    }
  }
`;
