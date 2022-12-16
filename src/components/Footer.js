import React from "react";

import { StyledFooter } from "../styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <p className="company-name">Keyboards</p>
        <p className="annotation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ullam voluptates possimus nobis quasi pariatur dolor quos ex, deserunt
          fugiat in ea atque quod placeat quis sequi a! Eaque, et.
        </p>
        <p className="information">Coded by:</p>
        <a className="creator" href="https://github.com/JMielewczyk">
          Jakub Mielewczyk
        </a>
        <div className="socials-wrapper">
          <a href="https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/JMielewczyk">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
