import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'

import { StyledNav } from './styles/Nav.styled'

import Menu from '../images/icons/icon-menu.svg'
import Cart from '../images/icons/icon-cart.svg'
import Avatar from '../images/avatars/image-avatar.png'
import Cross from '../images/icons/icon-close.svg'

interface Props {
    openCart: () => void
    cartOpen: boolean
}

const Nav = ({ openCart, cartOpen }: Props) => {
    const [menuIsActive, setMenuIsActive] = useState(false)

    const handleMenuOpen = () => {
        setMenuIsActive(true)
    }
    const handleMenuClose = () => {
        setMenuIsActive(false)
    }
    const handleCartOrder = () => {
        const order = false;
        if(order) {
            return (
                <p>Some product</p>
            )
        } else {
            return (
                <p>Your cart is empty</p> 
            )
        }
    }
    return (
        <StyledNav>
             <div className={menuIsActive ? 'menu-background active' : 'menu-background'}> 
                <div className='menu'>
                    <img onClick={handleMenuClose} className='menu-cross' src={Cross} alt="" />
                    <NavLink to="collections">All</NavLink>
                    <NavLink to="men">Men</NavLink>
                    <NavLink to="women">Women</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </div>
            <div className='container'>
                <img onClick={handleMenuOpen} className='hamburger-image' src={Menu} alt="" />
                <h2>keyboards</h2>
            </div>
            <div className='container'>
                <img onClick={openCart} className='cart-image' src={Cart} alt="" />
                <img className='avatar-image' src={Avatar} alt="" />
            </div>
            <div className={cartOpen ? "cart-container active" : "cart-container"}>
                <div className="cart-header">
                    <p className='cart-name'>Cart</p>
                </div>
                <div className='cart-order'>
                    {handleCartOrder()}
                </div>
            </div>
        </StyledNav>
    )
}
export default Nav;