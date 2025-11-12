import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
    return (
        <div className="bg-white text-gray-600 px-10 md:px-20 py-10 border-t border-gray-200">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="flex flex-col items-center md:items-start space-y-4">
                    <img src={assets.logo} alt="logo" className="w-32"/>
                    <p className="text-black text-sm text-center md:text-left">
                        Shop the best products with amazing deals and fast delivery.
                        Our team is here to help you with any questions or support.
                        Enjoy a simple, convenient, and enjoyable shopping experience!
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <p className="font-bold text-lg mb-2 text-black">Company</p>
                    <ul className="space-y-1 text-gray-600">
                        <li className="hover:text-gray-900 cursor-pointer transition">Home</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Products</li>
                        <li className="hover:text-gray-900 cursor-pointer transition">Cart</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-end justify-end text-gray-500 text-sm">
                    <p>© 2024 DoctorHub. All Rights Reserved.</p>
                </div>

            </div>

        </div>
    );
}

export default Footer;
