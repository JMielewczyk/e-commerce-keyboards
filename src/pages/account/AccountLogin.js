import React, { useState, useContext } from "react";

import Footer from "../../components/Footer";

import { StyledAccountLogin } from "../../styles/AccountLogin.styled";
import { BackgroundContext } from "../../App";

const AccountLogin = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { setIsLogged } = useContext(BackgroundContext);

  const handleInputLogin = (e) => {
    const value = e.target.value;
    setLoginValue(value);
  };
  const handleInputPassword = (e) => {
    const value = e.target.value;
    setPasswordValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginValue === "" || passwordValue === "") return;
    setIsLogged(true);
    console.log([loginValue, passwordValue, setIsLogged]);
  };
  return (
    <>
      <StyledAccountLogin>
        <div className="account-wrapper">
          <p className="account-details-txt">Account details</p>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="login">
              Email address
              <input
                autoComplete="off"
                onChange={handleInputLogin}
                value={loginValue}
                type="email"
                id="login"
                placeholder="ex. Email@myemail.com"
              ></input>
            </label>
            <label htmlFor="password">
              Password
              <input
                onChange={handleInputPassword}
                value={passwordValue}
                type="password"
                id="password"
              ></input>
            </label>
            <input
              autoComplete="off"
              className="submit-button"
              type="submit"
              value="Login"
            ></input>
          </form>
        </div>
      </StyledAccountLogin>
      <Footer />
    </>
  );
};

export default AccountLogin;
