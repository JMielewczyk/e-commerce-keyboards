import React from 'react'
import {Link} from 'react-router-dom'

import {keyboards} from '../../../data/keyboards'

const FeaturedProduct = () => {

    const mapAllProducts = keyboards.map(item => (
    <Link to={`/home/product/keyboards/${item.name}`}>
        <div className='featured-product'>
            <img src={item.images[0]} alt={`${item.name}`}/>
            <p className='keyboard-model'>{item.name}</p>
            <p className='price'>{item.price}</p>
        </div>
    </Link>
    ))

    return (
       {mapAllProducts}
    )
}

export default FeaturedProduct;