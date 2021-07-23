import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './Checkout/StateProvider';

function Header() {

    const [{basket}] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            <div className="header-search">
                <input className="header-searchInput"
                    type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-line1">
                        Hello
                    </span>
                    <span className="header-option-line2">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-option-line1">
                        Returns
                    </span>
                    <span className="header-option-line2">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-option-line1">
                        Your
                    </span>
                    <span className="header-option-line2">
                        Prime
                    </span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header-basketOption">
                    <ShoppingCartIcon />
                    <span className="header-option-line2-basketCount">{basket.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;
