//Hooks
import React, { useEffect, useState, useRef } from 'react';

//Components
import Loading from '../../../components/Loading';

//Styles
import { ContRel30Vh } from '../../../styles/elements/Home/AdditionalInfo/ContRel30Vh';
import { P20AbsoluteCenter } from '../../../styles/elements/Home/AdditionalInfo/P20AbsoluteCenter';
import { VideoAbsolute } from '../../../styles/elements/Home/AdditionalInfo/VideoAbsolute';

//Videos
import backlight from '../../../assets/videos/backlight.mp4';

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
        <P20AbsoluteCenter>All our keyboards are coming with rgb backlight</P20AbsoluteCenter>
        <VideoAbsolute ref={videoRef} autoPlay loop muted playsInline>
          <source src={backlight} type="video/mp4" />
        </VideoAbsolute>
      </ContRel30Vh>
    </>
  );
};

export default AdditionalInfo;
