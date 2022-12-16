import React from 'react'

import StartLayer from './homeComponents/StartLayer'
import Header from './homeComponents/Header'
import Main from './homeComponents/Main'
import About from './homeComponents/About'
import NewProducts from './homeComponents/NewProducts'

import { StyledStartLayer } from '../../styles/StartLayer.styled'
import { StyledHome } from '../../styles/Home.styled'
import { StyledHomeHeader } from '../../styles/HomeHeader.styled'
import { StyledMain } from '../../styles/Main.styled'
import AdditionalInfo from './homeComponents/AdditionalInfo'

const HomePage = () => {
    return (
        <>
            <StyledHome>
                <StyledStartLayer>
                    <StartLayer />
                </StyledStartLayer>
                <StyledHomeHeader>
                    <Header />
                </StyledHomeHeader>
                <StyledMain>
                    <Main />
                </StyledMain>
                <NewProducts />
                <AdditionalInfo />
                <About />
            </StyledHome>
        </>
    )
}

export default HomePage;