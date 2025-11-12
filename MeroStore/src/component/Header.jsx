import React from 'react';
import { assets } from '../assets/assets.js';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md">
            
            <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-gray-800">Shop smarter with us</p>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">Explore quality products, amazing deals, and fast delivery all at your fingertips. Your one-stop online shopping destination!</p>
                <button className="mt-4 bg-[#2e7d32] text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition duration-300">Start Shopping</button>
            </div>

            <div className="flex-1 mt-8 md:mt-0">
                <img src={assets.home} alt="home" className="w-full max-w-md mx-auto rounded-lg"/>
            </div>
        </div>
    );
};

export default Header;
