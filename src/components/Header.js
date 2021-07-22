import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header-logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            <div className="header-search">
                <input className="header-searchInput"
                    type="text" >
                {/* serach icon */}
                </input>
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-line1">
                        Hello Guest
                    </span>
                    <span className="header-option-line2">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                <span className="header-option-line1">
                        Hello Guest
                    </span>
                    <span className="header-option-line2">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                <span className="header-option-line1">
                        Hello Guest
                    </span>
                    <span className="header-option-line2">
                        Sign In
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Header;
