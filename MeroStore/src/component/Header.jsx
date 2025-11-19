import React from 'react';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="headerContainer">
            
            <div className="textContainer">
                <p className="textOne">Shop smarter with us</p>
                <p className="textTwo">Explore quality products, amazing deals and fast delivery all at your fingertips. Your one-stop online shopping destination !</p>
                <button onClick={() => navigate("/product")} className="shopButton">Start Shopping</button>
            </div>

            <div className="imageContainer">
                <img src={assets.home} alt="home" className="image"/>
            </div>
        </div>
    );
};

export default Header;