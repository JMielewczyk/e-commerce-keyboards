import React, { useState, useContext, useEffect } from 'react';
import {NavLink, Link, useLocation} from 'react-router-dom'

import { BackgroundContext } from '../App';

import { StyledNav } from './styles/Nav.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import Menu from '../images/icons/icon-menu.svg'
import Cart from '../images/icons/icon-cart.svg'
import Avatar from '../images/avatars/image-avatar.png'
import Cross from '../images/icons/icon-close.svg'

const Nav = ({ toggleCart, isCartOpen, setIsCartOpen, basket, dispatch }) => {

    const [menuIsActive, setMenuIsActive] = useState(false)
    const { isLogged } = useContext(BackgroundContext)
    const location = useLocation();
    
    useEffect(() => {
        setIsCartOpen(false)
        setMenuIsActive(false)
    }, [location])

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
                        <Link to={item.path} className='image-wrapper'>
                            <div className='background' style={{backgroundImage: `url(${item.image})`}} ></div>
                            <img src={item.image} alt={`${item.name} in cart`}/>
                        </Link>
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

    const getSummary = () => {
        let totalPrice = 0;
        basket.forEach(element => {
            if(element.price === undefined) return 0
            totalPrice += element.price
        })
        if(totalPrice === 0) return null
        else {
            const checkoutPath = isLogged === true ? 'shipping' : 'account';
            return (
                <div className='cart-summary'>
                    <p className='total'>Total: {totalPrice}$</p>
                    <Link className='checkout' to={checkoutPath} >Checkout</Link>
                </div>
            )
        }
    }
    return (
        <StyledNav>
             <div className={menuIsActive ? 'menu-background active' : 'menu-background'}> 
                <div className='menu'>
                    <img onClick={handleMenuClose} className='menu-cross' src={Cross} alt="" />
                    <NavLink to="/home/keyboards">Keyboards</NavLink>
                    <NavLink to="/home/keycaps">Keycaps</NavLink>
                    <NavLink to="/home/barebonekits">Barebone kits</NavLink>
                    <NavLink to="/home/switches">Switches</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </div>
            <div className='container'>
                <img onClick={handleMenuOpen} className='hamburger-image' src={Menu} alt="" />
                <Link className="logo-text" to="home">keyboards</Link>
            </div>
            <div className='container'>
                <div onClick={toggleCart} className='cart-image-container'>
                    {getAmountOnBasket()}
                    <img className='cart-image' src={Cart} alt="" />
                </div>
                <Link to='account'>
                    <img className='avatar-image' src={Avatar} alt="" />
                </Link>
            </div>
            <div className={isCartOpen ? "cart-container active" : "cart-container"}>
                <div className="cart-header">
                    <p className='cart-name'>Cart</p>
                </div>
                <div className='cart-order'>
                    {handleCartOrder()}
                </div>
                {getSummary()}
            </div>
        </StyledNav>
    )
}
export default Nav;