import React from 'react';

//Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { WrapperFooter } from '../styles/elements/Footer/WrapperFooter';
import { P20White } from '../styles/elements/Footer/P20White';
import { RowContainer } from '../styles/elements/RowContainer';
import { P10WhiteCenter } from '../styles/elements/Footer/P10WhiteCenter';
import { A10White } from '../styles/elements/Footer/A10White';

const Footer = () => {
  return (
    <WrapperFooter>
      <P20White>Keyboards</P20White>
      <P10WhiteCenter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam voluptates possimus
        nobis quasi pariatur dolor quos ex, deserunt fugiat in ea atque quod placeat quis sequi a!
        Eaque, et.
      </P10WhiteCenter>
      <P10WhiteCenter>Coded by:</P10WhiteCenter>
      <A10White className="creator" href="https://github.com/JMielewczyk">
        Jakub Mielewczyk
      </A10White>
      <RowContainer className="socials-wrapper">
        <A10White href="https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/">
          <FontAwesomeIcon icon={faLinkedin} />
        </A10White>
        <A10White href="https://github.com/JMielewczyk">
          <FontAwesomeIcon icon={faGithub} />
        </A10White>
      </RowContainer>
    </WrapperFooter>
  );
};

export default Footer;
