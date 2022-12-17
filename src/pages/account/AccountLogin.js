//Hooks
import React, { useState, useContext } from 'react';

//Components
import Footer from '../../components/Footer';

//Styles
import { StyledAccountLogin } from '../../styles/AccountLogin.styled';

//Context
import { BackgroundContext } from '../../App';

//Functions
import { handleInputLogin } from './functions/formHandlers';
import { handleInputPassword } from './functions/formHandlers';
import { handleSubmit } from './functions/formHandlers';

const AccountLogin = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { setIsLogged } = useContext(BackgroundContext);

  return (
    <>
      <StyledAccountLogin>
        <div className="account-wrapper">
          <p className="account-details-txt">Account details</p>
          <form
            onSubmit={(e) => handleSubmit(e, loginValue, passwordValue, setIsLogged)}
            className="form">
            <label htmlFor="login">
              Email address
              <input
                autoComplete="off"
                onChange={(e) => handleInputLogin(e, setLoginValue)}
                value={loginValue}
                type="email"
                id="login"
                placeholder="ex. Email@myemail.com"></input>
            </label>
            <label htmlFor="password">
              Password
              <input
                onChange={(e) => handleInputPassword(e, setPasswordValue)}
                value={passwordValue}
                type="password"
                id="password"></input>
            </label>
            <input autoComplete="off" className="submit-button" type="submit" value="Login"></input>
          </form>
        </div>
      </StyledAccountLogin>
      <Footer />
    </>
  );
};

export default AccountLogin;
