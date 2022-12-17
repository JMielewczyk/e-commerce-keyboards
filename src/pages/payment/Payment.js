//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Wrapper } from '../../styles/elements/Wrapper';
import { P10 } from '../../styles/elements/P10';
import { P20 } from '../../styles/elements/P20';
import { Form } from '../../styles/elements/Form';
import { Label } from '../../styles/elements/Label';
import { Input } from '../../styles/elements/Input';
import { SubmitFormInput } from '../../styles/elements/SubmitFormInput';
import { RowContainer } from '../../styles/elements/RowContainer';
import { LinkStyles } from '../../styles/elements/LinkStyles';

const Payment = () => {
  return (
    <Wrapper>
      <P20>Payment Details</P20>
      <Form>
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
            <Link to="home">Cancel order</Link>
          </LinkStyles>
          <SubmitFormInput
            className="submit-button"
            type="submit"
            value="Complete order"></SubmitFormInput>
        </RowContainer>
      </Form>
    </Wrapper>
  );
};

export default Payment;
