import React , { useEffect, useState, useReducer } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import ProductHeader from './ProductHeader'
import Loading from '../../Loading'

import minus from '../../../images/icons/icon-minus.svg'
import plus from '../../../images/icons/icon-plus.svg'
import cart from '../../../images/icons/icon-cart.svg'

import { StyledProductElement } from '../../styles/ProductElement.styled'

const ProductElement = ({ cartOpen, dispatch, basket }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [orderAmount, setOrderAmount] = useState(0)
    const { category, product } = useParams()
    const location = useLocation();

    const addToCart = () => {
        if(orderAmount === 0) return

        let alreadyInBasket = false;

        const thisProduct = data[category].filter(item => {
                if(item.name === product) {
                    return item
                }
            })

        basket.forEach(element => {
            if(element.name === product) {
                alreadyInBasket = true
                dispatch({type: 'change', payload: {
                    name: product,
                    quantity: orderAmount,
                    price: thisProduct[0].price,
                }})
            }
        })
        if(alreadyInBasket === false) {
            dispatch({type: 'add', payload: {
            name: product,
            quantity: orderAmount,
            price: thisProduct[0].price,
            image: thisProduct[0].imageTemplate,
            pathToProduct: location.pathname,
        }})
        }
        
    }

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
        return <Loading/>;
        const allElements = data[category].map(item =>
            {
                if(item.name === product) {
                    const actualPrice = () => {
                        const price = item.price -  (item.price * (item.discountValue / 100))
                        price.toFixed(2)
                        return price;
                    }
                    if(item.discount) {
                        return (
                        <div className='product-wrapper' key={item.name}>
                            <p className='product-category'>{category}</p>
                            <h2 className='product-title'>{item.name}</h2>
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
                            <button onClick={addToCart} className="addToCartBtn"><img src={cart} alt="" />Add to cart</button>
                        </div>
                        )
                    }   
                    else {
                        return (
                        <div className='product-wrapper' key={item.name}>
                            <p className='product-category'>{category}</p>
                            <h2 className='product-title'>{item.name}</h2>
                            <p className='product-description'>{item.description}</p>
                            <p className='actual-price'>{item.currency + item.price.toFixed(2)}</p>
                            <div className='amount-container' >
                                <img onClick={() => handleAmount('minus')} src={minus} alt="" />
                                <p className='amount'>{orderAmount}</p>
                                <img onClick={() => handleAmount('plus')} src={plus} alt="" />
                            </div>
                            <button onClick={addToCart} className="addToCartBtn"><img src={cart} alt="" />Add to cart</button>
                        </div>
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