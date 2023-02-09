import React, { useState } from 'react';
import { Form } from '../../styles/elements/Form';
import { CartWrapp } from '../../styles/elements/CartWrapp';
import { Input } from '../../styles/elements/Input';
import { Label } from '../../styles/elements/Label';
import { P20 } from '../../styles/elements/P20';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';
import { RowContainer } from '../../styles/elements/RowContainer';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secPassword, setSecPassword] = useState('');
  const [error, setError] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    if (password !== secPassword) {
      setError('Passwords are not the same!');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError('');
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

  return (
    <WrappFlexGrow>
      <CartWrapp>
        <P20>Create account</P20>
        <Form onSubmit={signUp}>
          <Label htmlFor="email">
            Email address
            <Input
              autoComplete="off"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              id="email"
              placeholder="ex. Email@myemail.com"></Input>
          </Label>
          <Label htmlFor="password">
            Password - at least 6 characters
            <Input
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              id="password"></Input>
          </Label>
          <Label htmlFor="password">
            Retype password
            <Input
              onChange={(e) => {
                e.preventDefault();
                setSecPassword(e.target.value);
              }}
              value={secPassword}
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
            value="Sign Up"
          />
        </Form>
        <RowContainer>
          <p>{`You already have account? Please `}</p>
          <Link to="/account">Sign In</Link>
        </RowContainer>
      </CartWrapp>
    </WrappFlexGrow>
  );
};

export default SignUp;
