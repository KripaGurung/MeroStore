import React from 'react';

const Register = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Registration Form</h2>
                <form id="registerForm" className="flex flex-col">

                    <label htmlFor="fullName" className="mb-1 text-gray-600 font-medium">Full Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Enter Your Name" required className="mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/>

                    <label htmlFor="email" className="mb-1 text-gray-600 font-medium">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" required className="mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/>

                    <label htmlFor="password" className="mb-1 text-gray-600 font-medium">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Your Password" required className="mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/>

                    <label htmlFor="confirmPassword" className="mb-1 text-gray-600 font-medium">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Your Password" required className="mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/>

                    <button className="bg-[#2e7d32] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#27632a] transition duration-300">Sign Up</button>
                    <p className="text-center text-gray-500 mt-4">Already have an account? <a href="/" className="text-blue-500 ml-1 hover:text-blue-600 font-medium">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;