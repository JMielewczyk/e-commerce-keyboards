import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom'

import { StyledNav } from './styles/Nav.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import Menu from '../images/icons/icon-menu.svg'
import Cart from '../images/icons/icon-cart.svg'
import Avatar from '../images/avatars/image-avatar.png'
import Cross from '../images/icons/icon-close.svg'

const Nav = ({ openCart, cartOpen, basket, dispatch }) => {

    const [menuIsActive, setMenuIsActive] = useState(false)

    const handleMenuOpen = () => {
        setMenuIsActive(true)
    }
    const handleMenuClose = () => {
        setMenuIsActive(false)
    }
    const handleCartOrder = () => {
        if(Object.keys(basket).length === 0) {
            return (
                <p>Empty</p>
            )
        } else {
            const renderBasket = basket.map((item, index) => {
                if(index === 0) return 
                return (
                    <div key={item.name} className='cart-product-wrapper'>
                        <div className='text-wrapper'>
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total price: {item.price}</p>
                        </div>
                        <div className='image-wrapper'>
                            <div className='background' style={{backgroundImage: `url(${item.image})`}} ></div>
                            <img src={item.image} alt={`${item.name} in cart`}/>
                        </div>
                        <div onClick={() => dispatch({type: 'delete', payload: {name: item.name}})} className='trash'>
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>
                    </div>
                )  
            })
            return renderBasket 
        }
    }

    const getAmountOnBasket = () => {
        let amount = 0;
        basket.forEach(element => amount++)
        if(amount > 1) {
            return <div className='products-number'>{amount - 1}</div>
        } else {
            return null
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
                <Link className="logo-text" to="home">keyboards</Link>
            </div>
            <div className='container'>
                <div onClick={openCart} className='cart-image-container'>
                    {getAmountOnBasket()}
                    <img className='cart-image' src={Cart} alt="" />
                </div>
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