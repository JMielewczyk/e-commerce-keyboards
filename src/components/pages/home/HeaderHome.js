import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Loading from '../../Loading'

const FeaturedProduct = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [productIndex, setProductIndex] = useState(0)

    function getData(category) {
        fetch('/data.json')
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw response
        })
        .then(object => setData(object.products[category]))
        .then(setLoading(false))
    }

    useEffect(() => {
        getData('keyboards')
    }, [])

    useEffect(() => {
        if(loading === false || data !== '')
            {
            const interval = setInterval(() => {
                if(productIndex === data.length - 1) return setProductIndex(0)
                setProductIndex(prevValue => prevValue + 1)
            }, 3000)
            return () => clearInterval(interval)
        }
        
    },[productIndex])

    const loadContent = () => {
        if(loading === true || data.length === 0)
        return <Loading/>
            return (
                <div key={Math.floor(Math.random() * 1000000)} className='featured-wrapper'>
                <div className='featured-text-container' >
                    <h3 className='featured-text'>Featured keyboards</h3>
                </div>
                <Link className='featured-product-container' key={data[productIndex].name} to={`/home/keyboards/${data[productIndex].name}`}>
                    <div className="featured-product">
                        <img src={process.env.PUBLIC_URL + data[productIndex].imageTemplate} alt={`${data[productIndex].name}`}/>
                        <p className='keyboard-model'>{data[productIndex].name}</p>
                        <p className='price'>{data[productIndex].currency + data[productIndex].price}</p>
                        <div className="featured-product-background" style={{backgroundImage: `url(${process.env.PUBLIC_URL + data[productIndex].imageTemplate})`}}>
                        </div>
                    </div> 
                </Link> 
                </div> 
                )
            }
        
        return (
            <>
            {loadContent()}
            </>
        )
    }

export default FeaturedProduct;