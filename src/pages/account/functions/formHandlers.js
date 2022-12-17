export const handleInputLogin = (e, setLoginValue) => {
  const value = e.target.value;
  setLoginValue(value);
};
export const handleInputPassword = (e, setPasswordValue) => {
  const value = e.target.value;
  setPasswordValue(value);
};
export const handleSubmit = (e, loginValue, passwordValue, setIsLogged) => {
  e.preventDefault();
  if (loginValue === '' || passwordValue === '') return;
  setIsLogged(true);
};
