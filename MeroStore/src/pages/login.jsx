// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./login.css";

// const Login = () => {

//     const [email, setEmail] =useState("");
//     const [password, setPassword] =useState("");

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Email:", email);
//         console.log("Password:", password);

//         const storedData = JSON.parse(localStorage.getItem("user"));

//         if (!storedData) {
//             console.log("No user found!");
//             alert("No user found!");
//             return;
//         }

//         if (email !== storedData.email) {
//             console.log("Email doesn't match!");
//             alert("Email doesn't match!");
//             return;
//         }

//         if (password !== storedData.password) {
//             console.log("Password doesn't match!");
//             alert("Password doesn't match!");
//             return;
//         }

//         console.log("Login successful!");
//         alert("Login successful!");
//         navigate("/home");
//         setEmail("");
//         setPassword(""); 

//     };

//     return(
//         <div className="mainBox">
//             <div className="formContainer">
//                 <h2>Welcome Back to Your Account</h2>
//                 <form onSubmit={handleSubmit} id="loginForm">
                    
//                     <label htmlFor="email">Email</label>
//                     <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Enter Your Email" required/>  

//                     <label htmlFor="password">Password</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Enter Your Password" required />
                    
//                     <button className="lognBtn">Login</button>
                    
//                     <div className="signupLink">
//                         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import "./login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            alert("No user found! Please Sign Up first.");
            return;
        }

        if (email !== user.email) {
            alert("Email does not match!");
            return;
        }

        if (password !== user.password) {
            alert("Password does not match!");
            return;
        }

        dispatch(loginSuccess());

        alert("Login Successful!");
        navigate("/home");

        setEmail("");
        setPassword("");
    };

    return (
        <div className="mainBox">
            <div className="formContainer">

                <h2>Welcome Back to Your Account</h2>

                <form onSubmit={handleSubmit} id="loginForm">

                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button className="lognBtn">Login</button>

                    <div className="signupLink">
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;