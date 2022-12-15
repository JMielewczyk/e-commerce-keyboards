import React, {useContext, useRef, useEffect, useState} from 'react'

import Loading from '../../Loading'

import { BackgroundContext } from '../../../App'

import backgroundVideoMobile from '../../../assets/videos/bg-video-mobile.mp4'
import backgroundVideoDesktop  from '../../../assets/videos/bg-video-desktop.mp4'

const StartBackground = () => {
    const videoRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)
    const { startingLayout: started , handleStartingLayout: handleBackground } = useContext(BackgroundContext)

    useEffect(() => {
        const handleVideoLoading = () => {
            
            if(element.readyState === 4) {
                setIsLoading(false)
                return () => {
                element.removeEventListener('loadeddata', handleVideoLoading)
                }
            } else {
                setIsLoading(true);
            }
        }
        const element = videoRef.current;
        element.addEventListener('loadeddata', handleVideoLoading)  
    }, [isLoading])

    return (
        <>
        {isLoading && (
            <div className={started ? 'loadingBackground' : 'loadingBackground active'} >{<Loading/>}</div>
        )}
        <video ref={videoRef} muted autoPlay loop className={started ? 'startBackground' : 'startBackground active'}>
                <source src={backgroundVideoMobile} type='video/mp4'/>
        </video>
            <div className={started ? 'startLayout' : 'startLayout active'}>
             <h1 className='company-name'>keyboards</h1>
            <p className='startText'>Find your best clickers</p>
            <button onClick={() => handleBackground()} className='btnGetStarted'>Enter<p className='enter-symbol'>⮐</p></button>
        </div>
        </>
    )
}

export default StartBackground