import React, {useState} from 'react'

import { Link } from 'react-router-dom';

import { StyledMain } from './styles/Main.styled'

import { sneakers } from '../data/sneakers';

import logo from '../images/icons/logo.svg'

const Main = () => {
    const [started, setStarted] = useState(false)

    const sneakersList = sneakers.map(item =>(
    <Link key={item.name} to={`product/shoes/${item.name}`}>
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
                <img className="startLogo" src={logo} alt="sneakers logo"/>
                <p className="startText">Find your best collections</p>
                <button onClick={handleStarted} className='btnGetStarted'>Get Started</button>
            </div>
            {sneakersList}
        </StyledMain>
    )
}

export default Main;