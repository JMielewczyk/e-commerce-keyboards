//Hooks
import React, { useEffect, useState, useRef } from 'react';

//Components
import Loading from '../../../components/Loading';

//Styles
import { ContRel30Vh } from '../../../styles/elements/AdditionalInfo/ContRel30Vh';
import { P20AbsoluteCenter } from '../../../styles/elements/AdditionalInfo/P20AbsoluteCenter';
import { VideoAbsolute } from '../../../styles/elements/AdditionalInfo/VideoAbsolute';

//Videos
import backlightMobile from '../../../assets/videos/backlight-mobile.mp4';
// import backlightDesktop from "../../../assets/videos/backlight-desktop.mp4";

const AdditionalInfo = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleVideoLoading = () => {
      if (element.readyState === 4) {
        setIsLoading(false);
        return () => {
          element.removeEventListener('loadeddata', handleVideoLoading);
        };
      } else {
        setIsLoading(true);
      }
    };
    const element = videoRef.current;
    element.addEventListener('loadeddata', handleVideoLoading);
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      <ContRel30Vh>
        <P20AbsoluteCenter>All our keyboards comes with rgb backlight</P20AbsoluteCenter>
        <VideoAbsolute ref={videoRef} autoPlay loop muted>
          <source src={backlightMobile} type="video/mp4" />
        </VideoAbsolute>
      </ContRel30Vh>
    </>
  );
};

export default AdditionalInfo;
