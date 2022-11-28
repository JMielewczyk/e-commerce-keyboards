import React from 'react'
import {Link} from 'react-router-dom'

import { keyboards } from '../../../data/keyboards'

const categories = ['Keycaps', 'BareboneKits', 'Switches', 'PrebuiltKeyboards']

const Main = () => {

    const keyboardsList = keyboards.map(item =>(
    <Link key={item.name} to={`product/keyboards/${item.name}`}>
    <div className="products-keyboards">
        <p className="shoeTitle">{item.name}</p>
    </div>
    </Link>))

    const categoriesMap = categories.map(item => (
        <Link key={item} className={`${item.toLowerCase()}-container`} to={`/home/product/${item.toLowerCase()}`}>
            <p className="text" >{item}</p>
        </Link>   
    ))

    return (
        <>
        <h1>Building Your First Mechanical Keyboard is Easier Than Ever</h1>
        {categoriesMap}
        {keyboardsList}
        </>
    )
}

export default Main;