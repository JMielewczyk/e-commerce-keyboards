import React, { useEffect, useState, useRef } from "react";

import Loading from "../../../components/Loading";

import { StyledAdditionalInfo } from "../../../styles/AdditionalInfo.styled";

import backlightMobile from "../../../assets/videos/backlight-mobile.mp4";
// import backlightDesktop from "../../../assets/videos/backlight-desktop.mp4";

const AdditionalInfo = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleVideoLoading = () => {
      if (element.readyState === 4) {
        setIsLoading(false);
        return () => {
          element.removeEventListener("loadeddata", handleVideoLoading);
        };
      } else {
        setIsLoading(true);
      }
    };
    const element = videoRef.current;
    element.addEventListener("loadeddata", handleVideoLoading);
  }, [isLoading]);

  return (
    <StyledAdditionalInfo>
      {isLoading && <Loading />}
      <div className="video-container">
        <p className="info-txt">All our keyboards comes with rgb backlight</p>
        <video ref={videoRef} autoPlay loop muted className="video">
          <source src={backlightMobile} type="video/mp4" />
        </video>
      </div>
    </StyledAdditionalInfo>
  );
};

export default AdditionalInfo;
