import logo from '../../images/Logo.svg';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='navigation'>
                <Link to='/Shop'>Shop</Link>
                <Link to='/Orders'>Orders</Link>
                <Link to='/Inventory'>Inventory</Link>
                <Link to='/About'>About</Link>
                {/* <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">Login</a> */}
            </div>
        </nav>
    );
};

export default Header;