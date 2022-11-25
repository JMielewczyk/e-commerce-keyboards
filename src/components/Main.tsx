import React from 'react'

import { Link } from 'react-router-dom';

import { StyledMain } from './styles/Main.styled'

import { sneakers } from '../data/sneakers';

const Main = () => {
    const sneakersList = sneakers.map(item =>(
    <Link key={item.name} to={`product/shoes/${item.name}`}>
    <div className="product">
        <p className="shoeTitle">{item.name}</p>
    </div>
    </Link>))
    return (
        <StyledMain>
            {sneakersList}
        </StyledMain>
    )
}

export default Main;