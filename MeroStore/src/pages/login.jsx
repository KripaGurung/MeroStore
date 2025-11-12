import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return(
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back to Your Account</h2>
                <form onSubmit={handleSubmit} id="loginForm" className="flex flex-col">
                    
                    <label htmlFor="email" className="mb-1 text-gray-600 font-medium">Email</label>
                    <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Enter Your Email" required className="mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-400"/>  

                    <label htmlFor="password" className="mb-1 text-gray-600 font-medium">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Enter Your Password" required className="mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-400"/>

                     <button className="bg-[#2e7d32] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#27632a] transition duration-300">Login</button>
                    <p className="text-center text-gray-500 mt-4">Don't have an account? <a href="/" className="text-blue-500 ml-1 hover:text-blue-600 font-medium">Sign Up</a></p>

                </form>
            </div>
          </div>
    );
}

export default Login;