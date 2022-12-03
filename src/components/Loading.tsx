import React from 'react'

import { StyledLoading } from '../components/styles/Loading.styled'

const loadingAnimation = () => {
        return (
            <StyledLoading>
                <div className='loading'>
                    Loading...
                </div>
            </StyledLoading>
        ) 
}

export default loadingAnimation;
