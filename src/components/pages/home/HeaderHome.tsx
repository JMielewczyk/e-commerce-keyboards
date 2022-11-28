import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

import { products } from '../../../data/products'

const FeaturedProduct = () => {
    const [productIndex, setProductIndex] = useState(0)
    const keyboards = products[0].keyboards;
    useEffect(() => {
        const interval = setInterval(() => {
            if(productIndex === keyboards.length - 1) return setProductIndex(0)
            setProductIndex(prevValue => prevValue + 1)
        }, 3000)
        return () => clearInterval(interval)
    },[productIndex])

        return (
    <>
    <div className='featured-text-container' >
        <h3 className='featured-text'>Featured keyboards</h3>
    </div>
    <Link className='featured-product-container' key={keyboards[productIndex].name} to={`/home/keyboard/${keyboards[productIndex].name}`}>
        <div className="featured-product">
            <img src={process.env.PUBLIC_URL + keyboards[productIndex].imageTemplate} alt={`${keyboards[productIndex].name}`}/>
            <p className='keyboard-model'>{keyboards[productIndex].name}</p>
            <p className='price'>{keyboards[productIndex].currency + keyboards[productIndex].price}</p>
            <div className="featured-product-background" style={{backgroundImage: `url(${process.env.PUBLIC_URL + keyboards[productIndex].imageTemplate})`}}>
             </div>
        </div> 
    </Link> 
    </>
    )
}

export default FeaturedProduct;