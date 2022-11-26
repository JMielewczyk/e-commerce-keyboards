import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {keyboards} from '../../../data/keyboards'

const FeaturedProduct = () => {
    const [productIndex, setProductIndex] = useState(0)

    useEffect(() => {
       const interval = setInterval(() => {
            if(productIndex === keyboards.length - 1) return setProductIndex(0)
            setProductIndex(prevValue => prevValue + 1)
        }, 2000)
        return () => clearInterval(interval)
    },[productIndex])

    return (
        <>
         <Link className={'featured-product-container'} key={keyboards[productIndex].name} to={`/home/product/keyboards/${keyboards[productIndex].name}`}>
            <div className='featured-product'>
                <img src={process.env.PUBLIC_URL + keyboards[productIndex].imageTemplate} alt={`${keyboards[productIndex].name}`}/>
                <p className='keyboard-model'>{keyboards[productIndex].name}</p>
                <p className='price'>{keyboards[productIndex].currency + keyboards[productIndex].price}</p>
            </div>
        </Link> 
        </>
    )
}

export default FeaturedProduct;