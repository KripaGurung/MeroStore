import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import "./login.css";
import {toast} from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("No user found, Please Sign Up first!");
            return;
        }

        if (email !== user.email) {
            toast.error("Email does not match!");
            return;
        }

        if (password !== user.password) {
            toast.error("Password does not match!");
            return;
        }

        dispatch(loginSuccess());

        toast.success("Login Successful!");
        navigate("/home");

        setEmail("");
        setPassword("");
    };

    return (
        <div className="main-box">
            <div className="form-container">

                <h2>Welcome Back to Your Account</h2>

                <form onSubmit={handleSubmit} id="loginForm">

                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button className="logn-btn">Login</button>

                    <div className="signup-link">
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;