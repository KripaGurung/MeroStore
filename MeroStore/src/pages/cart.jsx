import React from "react";

const Cart = () => {
    return (
        <div className="w-full flex justify-center mt-10 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-4">
                <div className="border border-green-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <img src="image" alt="product" className="h-full object-cover w-full"/>
                    </div>

                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-semibold">$100</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">hiii</p>

                        <div className="flex justify-between">
                            <button className="border border-green-400 text-green-700 px-3 py-1 rounded-md text-sm hover:bg-green-50 transition">View Details</button>
                            <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
