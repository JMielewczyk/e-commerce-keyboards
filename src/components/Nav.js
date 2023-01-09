//Hooks
import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

//Context
import { BackgroundContext } from '../App';

//Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Menu from '../assets/icons/icon-menu.svg';
import Cart from '../assets/icons/icon-cart.svg';
import Cross from '../assets/icons/icon-close.svg';

//Functions
import CartContent from './functions/CartContent';
import { handleMenuClose, handleMenuOpen } from './functions/menuHandlers';
import AmountOnBasket from './functions/AmountOnBasket';
import Summary from './functions/Summary';

//Styles

import { ColContainerFixed } from '../styles/elements/Nav/ColContainerFixed';
import { A20StylesCol } from '../styles/elements/Nav/A20StylesCol';
import { A20StylesRow } from '../styles/elements/Nav/A20StylesRow';
import { ImgSmall } from '../styles/elements/Nav/ImgSmall';
import { RowContainerBR0 } from '../styles/elements/Nav/RowContainerBR0';
import { DivBackFixed } from '../styles/elements/Nav/DivBackFixed';
import { GreyBackground } from '../styles/elements/Nav/GreyBackground';
import { CartWrapp } from '../styles/elements/Nav/CartWrapp';
import { CartContainer } from '../styles/elements/Nav/CartContainer';
import { CartHeader } from '../styles/elements/Nav/CartHeader';
import { P10 } from '../styles/elements/P10';
import { CartOrder } from '../styles/elements/Nav/CartOrder';
import { RowContainerBR0Rel } from '../styles/elements/Nav/RowContainerBR0Rel';
import { NavWrap } from '../styles/elements/Nav/NavWrap';
import { Container } from '../styles/elements/Nav/Container';
import { HamburgerMenu } from '../styles/elements/Nav/HamburgerMenu';
import { NavLinksMinLaptop } from '../styles/elements/Nav/NavLinksMinLaptop';
import { UserContainer } from '../styles/elements/Nav/UserContainer';

const Nav = ({ toggleCart, isCartOpen, setIsCartOpen, basket, dispatch }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { isLogged } = useContext(BackgroundContext);
  const location = useLocation();

  useEffect(() => {
    setIsCartOpen(false);
    setMenuIsActive(false);
    scrollToTop();
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavWrap>
      <ColContainerFixed className={menuIsActive === true ? 'active' : null}>
        <ImgSmall onClick={() => handleMenuClose(setMenuIsActive)} src={Cross} alt="" />
        <A20StylesCol>
          <NavLink to="/home/keyboards">Keyboards</NavLink>
          <NavLink to="/home/keycaps">Keycaps</NavLink>
          <NavLink to="/home/barebonekits">Barebone kits</NavLink>
          <NavLink to="/home/switches">Switches</NavLink>
          <a href="https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/">Contact</a>
        </A20StylesCol>
      </ColContainerFixed>
      <DivBackFixed
        onClick={() => handleMenuClose(setMenuIsActive)}
        className={menuIsActive === true ? 'active' : null}></DivBackFixed>
      <RowContainerBR0>
        <HamburgerMenu onClick={() => handleMenuOpen(setMenuIsActive)} src={Menu} alt="" />
        <A20StylesRow>
          <Link to="home">keyboards</Link>
        </A20StylesRow>
        <NavLinksMinLaptop>
          <NavLink to="/home/keyboards">Keyboards</NavLink>
          <NavLink to="/home/keycaps">Keycaps</NavLink>
          <NavLink to="/home/barebonekits">Barebone kits</NavLink>
          <NavLink to="/home/switches">Switches</NavLink>
          <a href="https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/">Contact</a>
        </NavLinksMinLaptop>
      </RowContainerBR0>
      <RowContainerBR0>
        <RowContainerBR0Rel onClick={toggleCart}>
          <ImgSmall src={Cart} alt="" />
          <AmountOnBasket basket={basket} />
        </RowContainerBR0Rel>
        <UserContainer>
          <Link to="account">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </UserContainer>
      </RowContainerBR0>
      <Container className={isCartOpen ? 'active' : null}>
        <CartWrapp>
          <CartContainer className={isCartOpen ? 'active' : null}>
            <CartHeader>
              <P10>Cart</P10>
            </CartHeader>
            <CartOrder>
              <CartContent basket={basket} dispatch={dispatch} />
            </CartOrder>
            <Summary basket={basket} isLogged={isLogged} />
          </CartContainer>
        </CartWrapp>
      </Container>
      <GreyBackground
        onClick={() => setIsCartOpen(false)}
        className={isCartOpen ? 'active' : null}></GreyBackground>
    </NavWrap>
  );
};
export default Nav;
