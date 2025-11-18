import React, { useEffect, useState } from "react";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, []);
    
    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (!cart.some((item) => item.id === product.id)) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.title} added to cart!`);
        }
    };
    
    const isInCart = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        return cart.some((item) => item.id === id);
    };
    
    return (
        <div className="px-6 py-10 bg-white-50 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Product</h1>
                <p className="text-gray-600 mb-8">Check out our featured products!</p>
            
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
                    {products.slice(0, 8).map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 bg-white shadow-sm ">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-contain bg-gray-50 p-4"/>
            
                        <div className="p-4 text-left">
                            <p className="text-gray-900 text-lg font-medium truncate mb-1">{product.title}</p>
                            <p className="text-gray-600 text-sm mb-4">${product.price}</p>
                            <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={`px-3 py-1 rounded-md text-sm ${isInCart(product.id) ? "bg-green-800 cursor-not-allowed text-white" : "bg-[#2e7d32] hover:bg-green-700 text-white"}`}>{isInCart(product.id) ? "Added " : "Add to cart"}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProduct;