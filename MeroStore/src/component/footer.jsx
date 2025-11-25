import React from "react";
import { assets } from "../assets/assets.js";
import "./footer.css";

const Footer = () => {
  return (
        <div className="main-container">
            <div className="footer-container">
                <div className="footer-description">
                    <div className="logo-container">
                        <img src={assets.logo} alt="logo" className="image" />
                    </div>
                    <p className="Sentence">Shop the best products with amazing deals and fast delivery. Our team is here to help you with any questions or support and enjoy a simple, convenient, and enjoyable shopping experience !</p>
                </div>
        
                <div className="footer-links">
                    <h3 className="Heading">COMPANY</h3>
                    <ul className="link-list">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Cart</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="sentence-one">Copyright © 2025 MeroStore. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;