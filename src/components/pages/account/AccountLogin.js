import React from 'react'

import Footer from '../home/Footer';

import { StyledAccountLogin } from '../../styles/AccountLogin.styled';

const AccountLogin = () => {
    return (
        <>
        <StyledAccountLogin>
            <div className='account-wrapper'>
                <p className='account-details-txt' >Account details</p>
                <form className='form' >
                    <label htmlFor='login'>
                        Email address
                        <input type='email' id='login' placeholder='ex. Email@myemail.com'></input>
                    </label>
                    <label htmlFor='password'>
                        Password
                        <input type='password' id='password'></input>
                    </label>
                    <input className='submit-button' type='submit' value='Login' ></input>
                </form>
            </div>
        </StyledAccountLogin>
        <Footer/>
        </>
    )
}

export default AccountLogin;