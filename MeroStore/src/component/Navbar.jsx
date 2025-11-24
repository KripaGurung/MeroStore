// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets.js";
// import "./navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const isLoggedIn = storedUser !== null;

//   return (
//     <div className="navContainer">
//       <nav className="navBar">
        
//         <img onClick={() => navigate("/home")} src={assets.logo} alt="Logo" className="Logo"/>

//         <ul className="navLinks">
//           <li onClick={() => navigate("/home")} >Home</li>
//           <li onClick={() => navigate("/product")} >Products</li>
//           <li onClick={() => navigate("/cart")} >Cart</li>
//         </ul>

//         <div className="navSection">
//           {isLoggedIn ? (
//             <p className="userName">
//               {storedUser.name}
//             </p>
//           ) : (
//             <button onClick={() => navigate("/")} className="Button">Login</button>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = storedUser !== null;

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navContainer">
      <nav className="navBar">
        
        <img onClick={() => navigate("/home")} src={assets.logo} alt="Logo" className="Logo"/>

        <ul className="navLinks">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/product")}>Products</li>

          {/* 🛒 Cart count added here */}
          <li onClick={() => navigate("/cart")}>
            Cart ({cartItems.length})
          </li>
        </ul>

        <div className="navSection">
          {isLoggedIn ? (
            <p className="userName">{storedUser.name}</p>
          ) : (
            <button onClick={() => navigate("/")} className="Button">Login</button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;