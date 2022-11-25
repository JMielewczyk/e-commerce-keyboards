import React , { useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './Header'

import minus from '../images/icons/icon-minus.svg'
import plus from '../images/icons/icon-plus.svg'
import cart from '../images/icons/icon-cart.svg'

import { StyledShoesElement } from './styles/ShoesElement.styled'

import { sneakers } from '../data/sneakers'

interface Props {
    cartOpen: boolean
}

const ShoesElement = ({cartOpen}:Props) => {
    const {shoeName} = useParams();
    console.log(shoeName)
    const [orderAmount, setOrderAmount] = useState(0)
    
    const handlePrice = () => {
        sneakers.forEach(item => {
        if(item.name === shoeName) {
            console.log('działa')
            const actualPrice = () => {
            const price = item.price * (item.discountValue / 100)
            return price.toFixed(2)
            }

        if(item.discount) {
                return (
                <div className='price-container'>
                    <div className='discounted-price-container'>
                        <p className='actual-price'>{item.currency + actualPrice()}</p>
                        <p className='discount'>{item.discountValue + '%'}</p>
                    </div>
                    <p className='old-price'>{item.currency + item.price.toFixed(2)}</p>
                </div>
            )
        }   else {
                return (
                <p className='actual-price'>{item.currency + item.price.toFixed(2)}</p>
            )
        }
    
}
})
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
    <StyledShoesElement>      
     <Header/>
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
    </StyledShoesElement>
    )
}

export default ShoesElement;

