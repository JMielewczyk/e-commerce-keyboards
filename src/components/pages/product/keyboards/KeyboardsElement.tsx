import React , { useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductHeader from './ProductHeader'

import minus from '../../../../images/icons/icon-minus.svg'
import plus from '../../../../images/icons/icon-plus.svg'
import cart from '../../../../images/icons/icon-cart.svg'

import {StyledKeyboardsElement} from '../../../styles/KeyboardsElement.styled'

import { keyboards } from '../../../../data/keyboards'

interface Props {
    cartOpen: boolean
}

const KeyboardsElement = ({cartOpen}:Props) => {
    const {keyboardName} = useParams();
    
    const [orderAmount, setOrderAmount] = useState(0)
    
    const handlePrice = () => {
        keyboards.forEach(item => {
        if(item.name === keyboardName) {
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
    <StyledKeyboardsElement>      
     <ProductHeader/>
        <p className='company-name'>keyboards</p>
            <h2 className='keyboard-title'>Fall Limited Edition Keyboards</h2>
            <p className='keyboard-description'>These low-profile keyboard are your perfect fast clickers. Featuring a durable rubber outer, they'll withstand bilions of clicks & drops from table (not tested). </p>
            {handlePrice()}
            <div className='amount-container' >
                <img onClick={() => handleAmount('minus')} src={minus} alt="" />
                <p className='amount'>{orderAmount}</p>
                <img onClick={() => handleAmount('plus')} src={plus} alt="" />
            </div>
            <button className="addToCartBtn"><img src={cart} alt="" />Add to cart</button>
    </StyledKeyboardsElement>
    )
}

export default KeyboardsElement;

