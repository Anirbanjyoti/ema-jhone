import logo from '../../images/Logo.svg';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='navigation'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">Login</a>
            </div>
        </nav>
    );
};

export default Header;