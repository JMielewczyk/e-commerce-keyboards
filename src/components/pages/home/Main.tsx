import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import FeaturedProduct from './FeaturedProduct'

import { StyledMain } from '../../styles/Main.styled'
import { StyledMainHeader } from '../../styles/MainHeader.styled'

import { keyboards } from '../../../data/keyboards';

const Main = () => {
    const [started, setStarted] = useState(false)

    const keyboardsList = keyboards.map(item =>(
    <Link key={item.name} to={`product/keyboards/${item.name}`}>
    <div className="product">
        <p className="shoeTitle">{item.name}</p>
    </div>
    </Link>))

    const handleStarted = () => {
        setStarted(prevValue => !prevValue)
    }



    return (
        <StyledMain>
            <div className={started ? "startBackground active" : "startBackground"}>
            </div>
            <div className={started ? 'startLayout active' : 'startLayout'}>
                <h1 className='company-name'>keyboards</h1>
                <p className="startText">Find your best clickers</p>
                <button onClick={handleStarted} className='btnGetStarted'>Enter<p className='enter-symbol'>⮐</p></button>
            </div>
            <StyledMainHeader>
                <div className='featured-text-container' >
                <h3 className='featured-text'>Featured keyboards</h3>
                <p className='featured-text2'>Picked by many</p>
                </div>
                <FeaturedProduct/>
            </StyledMainHeader>
            {keyboardsList}
        </StyledMain>
    )
}

export default Main;