//Hooks
import React, { useContext, useRef, useEffect, useState } from 'react';

//Components
import Loading from '../../../components/Loading';

//Context
import { BackgroundContext } from '../../../App';

//Video
import backgroundVideoMobile from '../../../assets/videos/bg-video-mobile.mp4';

//Styles
import { LoadingBackground } from '../../../styles/elements/Home/StartLayer/LoadingBackground';
import { VideoFixed } from '../../../styles/elements/Home/StartLayer/VideoFixed';
import { StartLayoutFix } from '../../../styles/elements/Home/StartLayer/StartLayoutFix';
import { H120Abs } from '../../../styles/elements/Home/StartLayer/H120Abs';
import { P15Abs } from '../../../styles/elements/Home/StartLayer/P15Abs';
import { EnterSymbolAbs } from '../../../styles/elements/Home/StartLayer/EnterSymbolAbs';
import { KeyboardButton } from '../../../styles/elements/Buttons/KeyboardButton';
import { StartWrapp } from '../../../styles/elements/Home/StartLayer/StartWrapp';
// import backgroundVideoDesktop from "../../../assets/videos/bg-video-desktop.mp4";

const StartLayer = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const { startLayout, setStartingLayout } = useContext(BackgroundContext);
  const [removeLayout, setRemoveLayout] = useState(false);

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

  useEffect(() => {
    if (startLayout === false) {
      const removeStartLayout = setTimeout(() => {
        setRemoveLayout(true);
      }, 1000);
      return () => clearTimeout(removeStartLayout);
    }
  }, [startLayout]);

  return (
    <StartWrapp
      style={removeLayout === true ? { display: 'none' } : null}
      className={startLayout === true ? null : 'active'}>
      {isLoading && (
        <LoadingBackground>
          <Loading />
        </LoadingBackground>
      )}
      <VideoFixed ref={videoRef} muted autoPlay loop>
        <source src={backgroundVideoMobile} type="video/mp4" />
      </VideoFixed>
      <StartLayoutFix>
        <H120Abs>keyboards</H120Abs>
        {isLoading !== true && <P15Abs>Find your best clickers</P15Abs>}
        <KeyboardButton onClick={() => setStartingLayout(false)}>
          Enter<EnterSymbolAbs>⮐</EnterSymbolAbs>
        </KeyboardButton>
      </StartLayoutFix>
    </StartWrapp>
  );
};

export default StartLayer;
