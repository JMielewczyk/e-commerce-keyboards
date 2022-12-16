import React from 'react'

import { StyledPayment } from '../../styles/Payment.styled';

const Payment = () => {
    return (
    <StyledPayment>
        <div className='payment-wrapper'>
            <p className='payment-details-txt' >Payment Details</p>
            <form className='form' >
                <label htmlFor='name-on-card'>
                    Name on card
                    <input autoComplete='off' id='name-on-card' type='text'></input>
                </label>
                <label htmlFor='card-number' >
                    Card number
                    <input autoComplete='off' id='card-number' type='number'></input>
                </label>
                <div className='container'>
                    <label>
                        Expiration
                        <div className='expiration-labels-container'>
                            <input autoComplete='off' type='number'></input>
                            <p className='slash'>/</p>
                            <input autoComplete='off' type='number'></input>
                        </div>   
                    </label>
                    <label htmlFor='card-cvc'>
                        CVC
                        <input autoComplete='off' id='card-cvc' type='number'></input>
                    </label>
                </div>
                <div className='container' >
                    <button className='cancel-button'>Cancel order</button>
                    <input className='submit-button' type='submit' value='Complete order'></input>
                </div>
            </form>
        </div>
    </StyledPayment>
   ) 
}

export default Payment;