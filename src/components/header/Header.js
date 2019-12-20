import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option left' to='/shop'>
                <span>SHOP</span>
            </Link>
            <Link className='option left' to='/shop'>
                <span>CONTACT</span>
            </Link>
        </div>
    </div>
);

export default Header;