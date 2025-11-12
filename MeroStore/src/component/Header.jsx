import React from 'react';
import { assets } from '../assets/assets.js';

const Header = () => {
    return (
        <div className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-10 md:px-16 py-12 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg">
            
            <div className="flex-1 space-y-5 text-center md:text-left md:pr-8">
                <p className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Shop smarter with us</p>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">Explore quality products, amazing deals and fast delivery all at your fingertips. Your one-stop online shopping destination!</p>
                <button className="mt-6 bg-[#2e7d32] text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">Start Shopping</button>
            </div>

            <div className="flex-1 flex justify-center">
                <img src={assets.home} alt="home" className="w-full max-w-xl md:max-w-1xl rounded-xl drop-shadow-md"/>
            </div>
        </div>
    );
};

export default Header;
