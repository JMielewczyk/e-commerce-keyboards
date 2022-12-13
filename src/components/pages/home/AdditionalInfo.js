import React, { useEffect, useState, useRef} from 'react'

import Loading from '../../Loading'

import { StyledAdditionalInfo } from '../../styles/AdditionalInfo.styled'

import backlightMobile from '../../../images/startBackground/backlight-mobile.mp4'
import backlightDesktop from '../../../images/startBackground/backlight-desktop.mp4'

const AdditionalInfo = () => {
    const videoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

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

    const loadContent = () => {
        if(isLoading) return <Loading/>
        else {
            return (
            <>
            
            </>
        )
        }
        
    }

    return (
        <StyledAdditionalInfo>
        {isLoading && <Loading/>}
        <div className='video-container'>
            <p className='info-txt'>All our keyboards comes with rgb backlight</p>
        <video ref={videoRef} autoPlay loop muted className='video' >
                <source src={backlightMobile} type="video/mp4" />
        </video>
        </div>
        </StyledAdditionalInfo>
    )
}

export default AdditionalInfo;
