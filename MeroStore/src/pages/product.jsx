import React from 'react';

const Product = () => {
  return (
        <div className="min-h-screen px-6 py-8 bg-white flex flex-col items-center">
            <div className="flex items-center border-2 border-blue-400 rounded-full px-4 py-2 w-80 shadow-sm mb-8 bg-white">
                <input type="text" placeholder="Search...." className="flex-grow outline-none bg-transparent text-gray-700"/>
                <i className="ri-search-line text-gray-500 text-lg"></i>
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-gray-50 flex flex-col">
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                        <img></img>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-500 text-xs">Rs. 500</span>
                            <span className="text-gray-500 text-xs">Rating</span>
                        </div>
                    
                        <p className="text-gray-700 text-sm mb-3 text-justify">This product is a modern innovation featuring a minimalist design and high-quality materials. Perfect for daily use and built to last.</p>
                        <div className="flex justify-between mt-auto">
                            <button className="border border-green-300 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-green-100">View Details</button>
                            <button className="bg-[#2e7d32] text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
