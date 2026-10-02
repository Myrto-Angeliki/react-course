import { Link } from 'react-router'
import { getItemsInCart } from '../../utils/items.js'
import Logo  from '../../assets/images/logo.png'
import MobileLogo from '../../assets/images/mobile-logo.png'
import CheckoutLock from "../../assets/images/icons/checkout-lock-icon.png"

import './CheckoutHeader.css'
import { useContext } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx'

export function CheckoutHeader({ cart }) {
    const { isDarkMode, setIsDarkMode} = useContext(DarkModeContext);

    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src={Logo} />
                        <img className="mobile-logo" src={MobileLogo}/>
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">{getItemsInCart(cart)} items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <button type="button" className="theme-toggle" 
                    onClick={()=>{setIsDarkMode(!isDarkMode)}}
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <img src={CheckoutLock} />
                </div>
            </div>
        </div>
    );
}