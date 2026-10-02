/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NavLink, useSearchParams, useNavigate } from 'react-router';
import { useState, useContext } from 'react';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import { getItemsInCart } from '../utils/items.js';

import './Header.css'
import { DarkModeContext } from '../contexts/DarkModeContext.jsx';

type HeaderProps = {
    cart: {
        productId: string;
        quantity: number;
        deliveryOptionId: string;
    }[];
}

export function Header({ cart}: HeaderProps) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchString = searchParams.get('search');
    const [searchInput, setSearchInput] = useState(searchString || '');
    const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext);

    return (
        <>
            <div className="header"> {/*id={isDarkMode ? 'dark-mode': ''}*/}
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src={LogoWhite} />
                        <img className="mobile-logo"
                            src={MobileLogoWhite} />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search"
                        value={searchInput}
                        onChange={(event) => {
                            setSearchInput(event.target.value);
                        }}
                        onKeyDown={(e) => {
                            e.key === 'Enter'
                                ? navigate(`/?search=${searchInput}`)
                                : e.key === 'Escape' && setSearchInput('');
                        }} />

                    <button className="search-button">
                        <img className="search-icon" src={SearchIcon}
                            onClick={() => { navigate(`/?search=${searchInput}`) }}
                        />
                    </button>
                </div>

                <div className="right-section">
                    <button type="button" className="theme-toggle" 
                    onClick={()=>{setIsDarkMode(!isDarkMode)}}
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    <NavLink className="orders-link header-link" to="/orders">
                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={CartIcon} />
                        <div className="cart-quantity">{getItemsInCart(cart)}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}