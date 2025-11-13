import React from 'react';
import { useEffect, useState } from 'react';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }, []);
    
    const handleAddToCart = (product) => {
        console.log("Added to cart:", product.title);
        alert(`${product.title} added to cart!`);
    };

  return (
        <div className="min-h-screen px-6 py-8 bg-white flex flex-col items-center">
            <div className="flex items-center border-2 border-green-400 rounded-full px-4 py-2 w-80 shadow-sm mb-8 bg-white">
                <input type="text" placeholder="Search...." className="flex-grow outline-none bg-transparent text-gray-700"/>
                <i className="ri-search-line text-gray-500 text-lg"></i>
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="border border-green-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-gray-50 flex flex-col">
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                            <img src={product.image} alt={product.title} className="h-full object-contain" />
                        </div>
                        
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-500 text-xs">${product.price}</span>
                                <span className="text-gray-500 text-xs">{product.category}</span>
                            </div>
                            
                            <p className="text-gray-700 text-sm mb-3 text-justify line-clamp-3">{product.description}</p>
                            
                            <div className="flex justify-between mt-auto">
                                <button onClick={() => handleAddToCart(product)} className="border border-green-300 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-green-100">View Details</button>
                                <button onClick={() => handleAddToCart(product)} className="bg-[#2e7d32] text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
