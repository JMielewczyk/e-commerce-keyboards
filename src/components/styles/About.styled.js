import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  .about-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    & .title {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;
