//Hooks
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Styles
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';
import { P10 } from '../../styles/elements/P10';
import { P20 } from '../../styles/elements/P20';
import { Form } from '../../styles/elements/Form';
import { Label } from '../../styles/elements/Label';
import { Input } from '../../styles/elements/Input';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';
import { RowContainer } from '../../styles/elements/RowContainer';
import { LinkStyles } from '../../styles/elements/LinkStyles';
import { CartWrapp } from '../../styles/elements/CartWrapp';

const Payment = () => {
  const navigate = useNavigate();
  const submitPayment = (e) => {
    e.preventDefault();
    navigate('/orderCompleted');
  };

  return (
    <WrappFlexGrow>
      <CartWrapp>
        <P20>Payment details</P20>
        <Form onSubmit={submitPayment}>
          <Label htmlFor="name-on-card">
            Name on card
            <Input
              placeholder="Your name here!"
              autoComplete="off"
              id="name-on-card"
              type="text"></Input>
          </Label>
          <Label htmlFor="card-number">
            Card number
            <Input
              placeholder="0000 0000 0000 0000"
              autoComplete="off"
              id="card-number"
              type="number"></Input>
          </Label>
          <RowContainer>
            <Label>
              Expiration
              <RowContainer>
                <Input placeholder="MM" autoComplete="off" type="number"></Input>
                <P10 style={{ minWidth: `0.6rem`, fontSize: `1.5rem` }}>/</P10>
                <Input placeholder="YY" autoComplete="off" type="number"></Input>
              </RowContainer>
            </Label>
            <Label htmlFor="card-cvc">
              CVC
              <Input autoComplete="off" id="card-cvc" type="number"></Input>
            </Label>
          </RowContainer>
          <RowContainer>
            <LinkStyles>
              <Link to="/shipping">Return to shipping</Link>
            </LinkStyles>
            <SubmitFormInput type="submit" value="Complete order"></SubmitFormInput>
          </RowContainer>
        </Form>
      </CartWrapp>
    </WrappFlexGrow>
  );
};

export default Payment;
