//Hooks
import React, { useState, useContext } from 'react';

//Context
import { BackgroundContext } from '../../App';

//Functions
import { handleInputLogin } from './functions/formHandlers';
import { handleInputPassword } from './functions/formHandlers';
import { handleSubmit } from './functions/formHandlers';

//Styles
import { P20 } from '../../styles/elements/P20.js';
import { Form } from '../../styles/elements/Form';
import { Label } from '../../styles/elements/Label';
import { Input } from '../../styles/elements/Input';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';
import { CartWrapp } from '../../styles/elements/CartWrapp';

const AccountLogin = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { setIsLogged } = useContext(BackgroundContext);

  return (
    <>
      <WrappFlexGrow>
        <CartWrapp>
          <P20>Account details</P20>
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
        </CartWrapp>
      </WrappFlexGrow>
    </>
  );
};

export default AccountLogin;
