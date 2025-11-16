import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
        <div className="bg-white text-gray-700 px-10 md:px-20 py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                    <div className="flex flex-col items-center md:items-start mb-3">
                        <img src={assets.logo} alt="logo" className="mb-1 w-40" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">Shop the best products with amazing deals and fast delivery. Our team is here to help you with any questions or support. Enjoy a simple, convenient, and enjoyable shopping experience!</p>
                </div>
        
                <div className="text-center md:text-right w-full md:w-1/2">
                    <h3 className="font-semibold text-lg mb-3 text-black">COMPANY</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-gray-900 cursor-pointer transition">Home</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Products</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Cart</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-5 text-center text-gray-500 text-sm">
                <p>Copyright © 2024 MeroStore. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;