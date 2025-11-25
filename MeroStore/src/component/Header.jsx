import React from 'react';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="header-container">
            
            <div className="text-container">
                <p className="text-one">Shop smarter with us</p>
                <p className="text-two">Explore quality products, amazing deals and fast delivery all at your fingertips. Your one-stop online shopping destination !</p>
                <button onClick={() => navigate("/product")} className="shop-button">Start Shopping</button>
            </div>

            <div className="image-container">
                <img src={assets.home} alt="home" className="image"/>
            </div>
        </div>
    );
};

export default Header;