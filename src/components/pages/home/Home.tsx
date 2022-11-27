import React from 'react'

import StartBackground from './StartBackground'
import HeaderMain from './HeaderHome'
import Main from './Main'

import { StyledStartBackground } from '../../styles/StartBackground.styled'
import { StyledHome } from '../../styles/Home.styled'
import { StyledHomeHeader } from '../../styles/HomeHeader.styled'
import { StyledMain } from '../../styles/Main.styled'

const HomePage = () => {
    return (
        <StyledHome>
            <StyledStartBackground>
                <StartBackground/>
            </StyledStartBackground>
            <StyledHomeHeader>
                <HeaderMain/>
            </StyledHomeHeader>
            <StyledMain>
                <Main/>
            </StyledMain>
        </StyledHome>
    )
}

export default HomePage;