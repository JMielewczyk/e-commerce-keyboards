import React, {useState} from 'react'

import minus from '../images/icons/icon-minus.svg'
import plus from '../images/icons/icon-plus.svg'
import cart from '../images/icons/icon-cart.svg'

import {StyledMain} from './styles/Main.styled'

const Main = () => {
    const [orderAmount, setOrderAmount] = useState(0)

    const sneakers = {
        discount: true,
        discountValue: 50,
        price: 250.00,
        currency: '$',
    }

    const actualPrice = () => {
        const price = sneakers.price * (sneakers.discountValue / 100)
        return price.toFixed(2)
    }

    const handlePrice = () => {
        if(sneakers.discount) {
            return (
                <div className='price-container'>
                    <div className='discounted-price-container'>
                        <p className='actual-price'>{sneakers.currency + actualPrice()}</p>
                        <p className='discount'>{sneakers.discountValue + '%'}</p>
                    </div>
                    <p className='old-price'>{sneakers.currency + sneakers.price.toFixed(2)}</p>
                </div>
            )
        } else {
            return (
                <p className='actual-price'>{sneakers.currency + sneakers.price.toFixed(2)}</p>
            )
        }
    }

    const handleAmount = (value: string) => {
        if(value === 'plus') {
            setOrderAmount(prevValue => prevValue + 1)
        } else if (value === 'minus') {
            if(orderAmount === 0) return
            setOrderAmount(prevValue => prevValue - 1)
        }
    }
    
    return (
        <StyledMain>
            <p className='company-name'>sneaker company</p>
            <h2 className='shoe-title'>Fall Limited Edition Sneakers</h2>
            <p className='shoe-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            {handlePrice()}
            <div className='amount-container' >
                <img onClick={() => handleAmount('minus')} src={minus} alt="" />
                <p className='amount'>{orderAmount}</p>
                <img onClick={() => handleAmount('plus')} src={plus} alt="" />
            </div>
            <button className="addToCartBtn"><img src={cart} alt="" />Add to cart</button>
        </StyledMain>
    )
}

export default Main;