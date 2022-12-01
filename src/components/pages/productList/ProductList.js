import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

import {StyledProductsList} from '../../styles/ProductsList.styled'

const ProductList = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(true)
    const { category } = useParams()

    const getItemsList = () => {
        fetch('/data.json')
        .then(response => {
            if(response.ok) {
              return response.json()
            } 
            throw response
        })
        .then(data => setData(data.products))
        .then(setLoading(false))
        .catch(error => console.log(error))
    }

    const getContentLoaded = (category) => {
        if(loading === true || data[category] === undefined) {
            return <div>Loading...</div>
        }
        else if (loading === false) {
            const productsList = data[category].map(item => {
                return (
                    <Link key={item.name} to={`/home/${category.toLowerCase()}/${item.name}`} className="product-wrapper">
                        <div className='product-wrapper__image-wrapper'>
                            <img className='image' src={item.imageTemplate} alt=''/>
                        </div>
                        <div className='product-wrapper__text-wrapper'>
                            <p className='product-name'>{item.name}</p>
                            <p className='product-price'>Price: {item.price}{item.currency}</p>
                        </div>
                    </Link>
                )
            })
            return productsList
        }
    }

    useEffect(() => {
        getItemsList()
    }, [])

    return (
        <StyledProductsList>
        <div>List of products</div>
        {getContentLoaded(category)}
        </StyledProductsList>
    )
}

export default ProductList;