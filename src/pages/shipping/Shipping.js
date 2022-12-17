//Hooks
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Styles
import { P20 } from '../../styles/elements/P20';
import { Form } from '../../styles/elements/Form';
import { Label } from '../../styles/elements/Label';
import { RowContainer } from '../../styles/elements/RowContainer';
import { Select } from '../../styles/elements/Select';
import { Input } from '../../styles/elements/Input';
import { LinkStyles } from '../../styles/elements/LinkStyles';
import { Wrapper } from '../../styles/elements/Wrapper';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';

const inputNames = {
  cityInput: 'cityInput',
  streetInput: 'streetInput',
  postCodeInput: 'postCodeInput'
};

const Shipping = () => {
  const [cityInput, setCityInput] = useState(localStorage.getItem(inputNames.cityInput));
  const [streetInput, setStreetInput] = useState(localStorage.getItem(inputNames.cityInput));
  const [postCodeInput, setPostCodeInput] = useState(localStorage.getItem(inputNames.cityInput));
  const navigate = useNavigate();

  const handleInputs = (e, inputName) => {
    const value = e.target.value;
    switch (inputName) {
      case inputNames.cityInput:
        setCityInput(value);
        localStorage.setItem(inputNames.cityInput, e.target.value);
        break;
      case inputNames.streetInput:
        setStreetInput(value);
        localStorage.setItem(inputNames.streetInput, e.target.value);
        break;
      case inputNames.postCodeInput:
        setPostCodeInput(value);
        localStorage.setItem(inputNames.postCodeInput, e.target.value);
        break;
      default:
        console.log(`Unknown input name: ${inputName}`);
    }
  };

  const submitShipping = (e) => {
    e.preventDefault();
    if (cityInput + streetInput + postCodeInput === '') return;
    navigate('/payment');
  };
  return (
    <Wrapper>
      <P20 className="shipping-details-txt">Shipping details</P20>
      <Form onSubmit={submitShipping}>
        <Label htmlFor="inputCity">
          City
          <Input
            onChange={(e) => handleInputs(e, inputNames.cityInput)}
            value={cityInput}
            autoComplete="off"
            id="inputCity"
            type="txt"></Input>
        </Label>
        <Label htmlFor="inputStreet">
          Street name
          <Input
            onChange={(e) => handleInputs(e, inputNames.streetInput)}
            value={streetInput}
            autoComplete="off"
            id="inputStreet"></Input>
        </Label>
        <RowContainer>
          <Label htmlFor="inputPostCode">
            Post Code
            <Input
              onChange={(e) => handleInputs(e, inputNames.postCodeInput)}
              value={postCodeInput}
              autoComplete="off"
              id="inputPostCode"></Input>
          </Label>
          <Label htmlFor="delivery">
            Select shipping
            <Select id="delivery">
              <option value="">Please choose an delivery</option>
              <option value="free-delivery">Free delivery</option>
            </Select>
          </Label>
        </RowContainer>
        <RowContainer>
          <LinkStyles>
            <Link to="home">Cancel order</Link>
          </LinkStyles>
          <SubmitFormInput type="submit" value="Payment"></SubmitFormInput>
        </RowContainer>
      </Form>
    </Wrapper>
  );
};

export default Shipping;
