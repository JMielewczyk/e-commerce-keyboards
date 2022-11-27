import React from 'react'
import { Link } from 'react-router-dom';

import StartBackground from './StartBackground'
import HeaderMain from './HeaderMain'

import { StyledStartBackground } from '../../styles/StartBackground.styled'
import { StyledMain } from '../../styles/Main.styled'
import { StyledMainHeader } from '../../styles/MainHeader.styled'


import { keyboards } from '../../../data/keyboards';

const Main = () => {
    
    const keyboardsList = keyboards.map(item =>(
    <Link key={item.name} to={`product/keyboards/${item.name}`}>
    <div className="product">
        <p className="shoeTitle">{item.name}</p>
    </div>
    </Link>))
    return (
        <StyledMain>
            <StyledStartBackground>
                <StartBackground/>
            </StyledStartBackground>
            <StyledMainHeader>
                <HeaderMain/>
            </StyledMainHeader>
            {keyboardsList}
        </StyledMain>
    )
}

export default Main;