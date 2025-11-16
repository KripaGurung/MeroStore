import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        <img onClick={() => navigate("/")} src={assets.logo} alt="Logo" className="w-20 md:w-20 h-auto transition-transform duration-300 hover:scale-105 cursor-pointer"/>

        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li onClick={() => navigate("/home")} className="cursor-pointer hover:text-green-600 transition-colors duration-200">Home</li>
          <li onClick={() => navigate("/product")} className="cursor-pointer hover:text-green-600 transition-colors duration-200">Products</li>
          <li onClick={() => navigate("/cart")} className="cursor-pointer hover:text-green-600 transition-colors duration-200">Cart</li>
        </ul>

        <div className="flex space-x-4">
          <button onClick={() => navigate("/login")} className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
