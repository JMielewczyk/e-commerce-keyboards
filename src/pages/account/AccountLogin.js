//Hooks
import React, { useState, useContext } from 'react';

//Context
import { BackgroundContext } from '../../App';

//Functions
import { handleInputLogin } from './functions/formHandlers';
import { handleInputPassword } from './functions/formHandlers';
import { handleSubmit } from './functions/formHandlers';

//Styles
import { P2 } from '../../styles/elements/P2.js';
import { Form } from '../../styles/elements/Form';
import { Label } from '../../styles/elements/Label';
import { Input } from '../../styles/elements/Input';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';
import { Wrapper } from '../../styles/elements/Wrapper';

const AccountLogin = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { setIsLogged } = useContext(BackgroundContext);

  return (
    <>
      <Wrapper>
        <P2>Account Details</P2>
        <Form onSubmit={(e) => handleSubmit(e, loginValue, passwordValue, setIsLogged)}>
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
          <SubmitFormInput
            autoComplete="off"
            className="submit-button"
            type="submit"
            value="Login"></SubmitFormInput>
        </Form>
      </Wrapper>
    </>
  );
};

export default AccountLogin;