import React, { useState } from 'react';

import { StyledNav } from './styles/Nav.styled'

import Menu from '../images/icons/icon-menu.svg'
import Logo from '../images/icons/logo.svg'
import Cart from '../images/icons/icon-cart.svg'
import Avatar from '../images/avatars/image-avatar.png'
import Cross from '../images/icons/icon-close.svg'

interface Props {
    openCart: () => void
}

const Nav = ({ openCart }: Props) => {
    const [menuIsActive, setMenuIsActive] = useState(false)

    const handleMenuOpen = () => {
        setMenuIsActive(true)
    }
    const handleMenuClose = () => {
        setMenuIsActive(false)
    }
    return (
        <StyledNav>
             <div className={menuIsActive ? 'menu-background active' : 'menu-background'}> 
                <div className='menu'>
                    <img onClick={handleMenuClose} className='menu-cross' src={Cross} alt="" />
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className='container'>
                <img onClick={handleMenuOpen} className='hamburger-image' src={Menu} alt="" />
                <img className='logo-image' src={Logo} alt="" />
            </div>
            <div className='container'>
                <img onClick={openCart} className='cart-image' src={Cart} alt="" />
                <img className='avatar-image' src={Avatar} alt="" />
            </div>
        </StyledNav>
    )
}
export default Nav;