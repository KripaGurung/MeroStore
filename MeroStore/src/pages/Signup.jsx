import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword] =useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Full Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            console.log("Email pattern doesn't match!");
            alert("Email pattern doesn't match!");
            return;
        };
        
        if (password !== confirmPassword) {
            console.log("Password doesn't match!");
            alert("Password doesn't match!");
            return;
        };
        
        const userData = { name, email, password };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Registration successful!");
        navigate("/"); 
        
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };

    return(
        <div className="">
            <div className="">
                <h2>Registration Form</h2>
                <form  onSubmit={handleSubmit} id="registerForm">

                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="fullName" name="fullName" placeholder="Enter Your Name" required />

                    <label htmlFor="email" className="mb-1 text-gray-600 font-medium">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Enter Your Email" required />

                    <label htmlFor="password" className="mb-1 text-gray-600 font-medium">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Enter Your Password" required />

                    <label htmlFor="confirmPassword" className="mb-1 text-gray-600 font-medium">Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" name="confirmPassword" placeholder="Confirm Your Password" required />
                    
                    <div>
                        <button  type="submit">Sign Up</button>
                        <p>Already have an account? <a href="/">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;