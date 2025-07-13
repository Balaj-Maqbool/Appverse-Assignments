import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">🖼️</span>
                    <span className="logo-text">NFT Gallery</span>
                </Link>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="#explore">Explore</a>
                    <a href="#about">About</a>
                </nav>
                <button className="connect-wallet">Connect Wallet</button>
            </div>
        </header>
    );
};

export default Header;