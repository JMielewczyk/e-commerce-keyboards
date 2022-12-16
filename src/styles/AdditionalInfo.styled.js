import styled from "styled-components";

export const StyledAdditionalInfo = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  border-radius: 8px;
  .video-container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .info-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: white;
    z-index: 1;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
