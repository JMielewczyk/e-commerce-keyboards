import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductHeader from './ProductHeader'

import minus from '../../../../images/icons/icon-minus.svg'
import plus from '../../../../images/icons/icon-plus.svg'
import cart from '../../../../images/icons/icon-cart.svg'

import { StyledProductElement } from '../../../styles/ProductElement.styled'


const ProductElement = ({cartOpen}) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [orderAmount, setOrderAmount] = useState(0)

    const { category, product } = useParams()

    function getData() {
        fetch('/data.json')
        .then(response => {
            if(response.ok) {
              return response.json();
            }
            throw response;
        })
        .then(data => setData(data.products))
        .then(() => setLoading(false))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    const loadContent = (category) => {
        if(loading === true)
        return (
            <div>Content loading</div>
        )
        const allElements = data[category].map(item =>
            {
                if(item.name === product) {
                    const actualPrice = () => {
                        const price = item.price * (item.discountValue / 100)
                        price.toFixed(2)
                        return price;
                    }
                    if(item.discount) {
                        return (
                        <>
                            <p className='product-category'>{category}</p>
                            <h2 className='product-title'>{item.title}</h2>
                            <p className='product-description'>{item.description}</p>
                            <div key={item.name} className='price-container'>
                                <div className='discounted-price-container'>
                                    <p className='actual-price'>{item.currency + actualPrice()}</p>
                                    <p className='discount'>{item.discountValue + '%'}</p>
                                </div>
                            <p className='old-price'>{item.currency + item.price.toFixed(2)}</p>
                            </div>
                            <div className='amount-container' >
                                <img onClick={() => handleAmount('minus')} src={minus} alt="" />
                                <p className='amount'>{orderAmount}</p>
                                <img onClick={() => handleAmount('plus')} src={plus} alt="" />
                            </div>
                            <button className="addToCartBtn"><img src={cart} alt="" />Add to cart</button>
                        </>
                        )
                    }   
                    else {
                        return (
                        <>
                            <p className='product-category'>{category}</p>
                            <h2 className='product-title'>{item.title}</h2>
                            <p className='product-description'>{item.description}</p>
                            <p className='actual-price'>{item.currency + item.price.toFixed(2)}</p>
                            <div className='amount-container' >
                                <img onClick={() => handleAmount('minus')} src={minus} alt="" />
                                <p className='amount'>{orderAmount}</p>
                                <img onClick={() => handleAmount('plus')} src={plus} alt="" />
                            </div>
                            <button className="addToCartBtn"><img src={cart} alt="" />Add to cart</button>
                        </>
                        )
                    }
                }
            })
            return allElements
    }
     const handleAmount = (value) => {
        if(value === 'plus') {
            setOrderAmount(prevValue => prevValue + 1)
         } else if (value === 'minus') {
            if(orderAmount === 0) return
            setOrderAmount(prevValue => prevValue - 1)
         }
     }

    return (
    <StyledProductElement>
        <ProductHeader/>
            {loadContent(category)}
    </StyledProductElement>
    )
}
export default ProductElement;