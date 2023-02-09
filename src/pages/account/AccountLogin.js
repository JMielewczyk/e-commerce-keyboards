//Hooks
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { BackgroundContext } from '../../App';

//Styles
import { P20 } from '../../styles/elements/P20.js';
import { Form } from '../../styles/elements/Form';
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';
import { CartWrapp } from '../../styles/elements/CartWrapp';
import { BtnGoogle } from '../../styles/elements/Account/BtnGoogle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Label } from '../../styles/elements/Label';
import { Input } from '../../styles/elements/Input';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';

//Utils
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { handleInputLogin, handleInputPassword } from './functions/formHandlers';
import { RowContainer } from '../../styles/elements/RowContainer';

const AccountLogin = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');
  const provider = new GoogleAuthProvider();
  const { setIsLogged, setUserCredential } = useContext(BackgroundContext);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginValue, passwordValue)
      .then((result) => {
        setUserCredential(result.user.email);
        setIsLogged(true);
      })
      .catch((error) => {
        let message = error.code.slice(5);
        message = message.charAt(0).toUpperCase() + message.slice(1);
        message = message.replace(/-/g, ' ');
        if (message === 'Email already in use') {
          message =
            'Email already in use or you have linked your account to this email via google authentication, if so please use Sign in with Google';
        }
        setError(message);
      });
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        setUserCredential(result.user.email);
        setIsLogged(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WrappFlexGrow>
        <CartWrapp>
          <P20>Login</P20>
          <Form onSubmit={signIn}>
            <Label htmlFor="login">
              Email address
              <Input
                autoComplete="off"
                onChange={(e) => handleInputLogin(e, setLoginValue)}
                value={loginValue}
                type="email"
                id="login"
                placeholder="ex. Email@myemail.com"></Input>
            </Label>
            <Label htmlFor="password">
              Password
              <Input
                onChange={(e) => handleInputPassword(e, setPasswordValue)}
                value={passwordValue}
                type="password"
                id="password"></Input>
            </Label>
            <RowContainer>
              {error !== '' ? <p style={{ color: 'red' }}>{error}</p> : null}{' '}
            </RowContainer>
            <SubmitFormInput
              type="submit"
              autoComplete="off"
              className="submit-button"
              value="Sign In"
            />
          </Form>
          <RowContainer>
            <p>{`You don't have account ? Please`}</p>
            <Link to="/signup">Sign Up</Link>
          </RowContainer>
          <p>... or sign in with simple click</p>
          <BtnGoogle onClick={googleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            Sign in with Google
          </BtnGoogle>
        </CartWrapp>
      </WrappFlexGrow>
    </>
  );
};

export default AccountLogin;
