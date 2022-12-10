import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { StyledShipping } from '../../styles/Shipping.styled'

const inputNames = {
        cityInput: 'cityInput',
        streetInput: 'streetInput',
        postCodeInput: 'postCodeInput'
    }

const Shipping = () => {
    const [cityInput, setCityInput] = useState(localStorage.getItem(inputNames.cityInput));
    const [streetInput, setStreetInput] = useState(localStorage.getItem(inputNames.cityInput));
    const [postCodeInput, setPostCodeInput] = useState(localStorage.getItem(inputNames.cityInput));
    const navigate = useNavigate();
    
    const handleInputs = (e, inputName) => {
        const value = e.target.value;
        switch(inputName){
            case inputNames.cityInput: 
            setCityInput(value)
            localStorage.setItem(inputNames.cityInput, e.target.value)
            break;
            case inputNames.streetInput: 
            setStreetInput(value)
            localStorage.setItem(inputNames.streetInput, e.target.value)
            break;
            case inputNames.postCodeInput:
            setPostCodeInput(value)
            localStorage.setItem(inputNames.postCodeInput, e.target.value)
            break;
            default: console.log(`Unknown input name: ${inputName}`);
        }
    }

    const submitShipping = (e) => {
        e.preventDefault();
        if(cityInput + streetInput + postCodeInput === '') return
        navigate('/payment')
    }
    return (
        <StyledShipping>
            <div className='shipping-wrapper'>
                <p className='shipping-details-txt'>Shipping details</p>
                <form onSubmit={submitShipping} className='form'>
                    <label htmlFor='inputCity'>
                        City
                        <input onChange={(e) => handleInputs(e, inputNames.cityInput)} value={cityInput}  autoComplete='off' id='inputCity' type='txt'></input>
                    </label>
                    <label htmlFor='inputStreet'>
                        Street name
                        <input onChange={(e) => handleInputs(e, inputNames.streetInput)} value={streetInput} autoComplete='off' id='inputStreet'></input>
                    </label>
                    <div className='container'>
                        <label htmlFor='inputPostCode'>
                            Post Code
                            <input onChange={(e) => handleInputs(e, inputNames.postCodeInput)} value={postCodeInput} autoComplete='off' id='inputPostCode'></input>
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