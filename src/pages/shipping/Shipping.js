//Hooks
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Styles
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';
import { CartShipWrapp } from '../../styles/elements/Shipping/CartShipWrapp';
import { P20 } from '../../styles/elements/P20';
import { Form } from '../../styles/elements/Form';
import { Label } from '../../styles/elements/Label';
import { RowContainer } from '../../styles/elements/RowContainer';
import { Select } from '../../styles/elements/Select';
import { Input } from '../../styles/elements/Input';
import { LinkStyles } from '../../styles/elements/LinkStyles';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';
import { P10 } from '../../styles/elements/P10';

const inputNames = {
  cityInput: 'cityInput',
  streetInput: 'streetInput',
  postCodeInput: 'postCodeInput',
  selectInput: 'selectInput'
};

const Shipping = () => {
  const [cityInput, setCityInput] = useState(localStorage.getItem(inputNames.cityInput));
  const [streetInput, setStreetInput] = useState(localStorage.getItem(inputNames.streetInput));
  const [postCodeInput, setPostCodeInput] = useState(
    localStorage.getItem(inputNames.postCodeInput)
  );
  const [selectInput, setSelectInput] = useState(localStorage.getItem(inputNames.selectInput));
  const [formIsNotCompleted, setFormIsNotCompleted] = useState(false);
  const navigate = useNavigate();

  const handleInputs = (e, inputName) => {
    const value = e.target.value;
    switch (inputName) {
      case inputNames.cityInput:
        setCityInput(value);
        localStorage.setItem(inputNames.cityInput, value);
        break;
      case inputNames.streetInput:
        setStreetInput(value);
        localStorage.setItem(inputNames.streetInput, value);
        break;
      case inputNames.postCodeInput:
        setPostCodeInput(value);
        localStorage.setItem(inputNames.postCodeInput, value);
        break;
      case inputNames.selectInput:
        setSelectInput(value);
        localStorage.setItem(inputNames.selectInput, value);
        break;
      default:
        console.log(`Unknown input name: ${inputName}`);
    }
  };

  const submitShipping = (e) => {
    e.preventDefault();
    if (cityInput === '' || streetInput === '' || postCodeInput === '' || selectInput === '') {
      setFormIsNotCompleted(true);
      return;
    } else {
      setFormIsNotCompleted(false);
    }
    navigate('/payment');
  };
  return (
    <WrappFlexGrow>
      <CartShipWrapp>
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
              <Select value={selectInput} onChange={(e) => handleInputs(e, inputNames.selectInput)}>
                <option value="">Please choose an delivery</option>
                <option value="free-delivery">Free delivery</option>
              </Select>
            </Label>
          </RowContainer>
          {formIsNotCompleted ? <P10>Please complete all fields</P10> : null}
          <RowContainer>
            <LinkStyles>
              <Link to="home">Cancel order</Link>
            </LinkStyles>
            <SubmitFormInput type="submit" value="Payment"></SubmitFormInput>
          </RowContainer>
        </Form>
      </CartShipWrapp>
    </WrappFlexGrow>
  );
};

export default Shipping;
