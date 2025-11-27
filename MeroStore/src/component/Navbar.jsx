import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  // const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <img onClick={() => navigate("/home")} src={assets.logo} alt="Logo" className="Logo"/>

        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/product")}>Products</li>
          {/* <li onClick={() => navigate("/cart")}>Cart ({cartItems.length})</li> */}
           <li onClick={() => navigate("/cart")}>Cart </li>
        </ul>

        <div className="nav-section">
          {isLoggedIn && user ? (
            <p className="user-name">{user.name}</p>
          ) : (
            <button onClick={() => navigate("/")} className="Button">Login</button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;