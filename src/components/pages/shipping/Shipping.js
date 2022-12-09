import React from 'react'
import {Link} from 'react-router-dom'

import { StyledShipping } from '../../styles/Shipping.styled'

const Shipping = () => {
    return (
        <StyledShipping>
            <div className='shipping-wrapper'>
                <p className='shipping-details-txt'>Shipping details</p>
                <form className='form'>
                    <label htmlFor='inputCity'>
                        City
                        <input id='inputCity' type='txt'></input>
                    </label>
                    <label htmlFor='inputStreet'>
                        Street name
                        <input id='inputStreet'></input>
                    </label>
                    <div className='container'>
                        <label htmlFor='inputPostCode'>
                            Post Code
                            <input id='inputPostCode'></input>
                        </label>
                        <label htmlFor='delivery'>
                            Select shipping
                            <select id='delivery'>
                                <option value=''>Please choose an delivery</option>
                                <option value='free-delivery'>Free delivery</option>
                            </select>
                        </label>
                    </div>
                    <div className='container'>
                        <Link className='cancel-button' to='home'>Cancel order</Link>
                        <input className='submit-button' type='submit' value='Payment'></input>
                    </div>
                </form>
            </div>
        </StyledShipping>
    )
}

export default Shipping;