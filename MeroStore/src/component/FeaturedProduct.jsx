import React, { useEffect, useState } from "react";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, []);
    
    const handleAddToCart = (product) => {
        console.log("Added to cart:", product.title);
        alert(`${product.title} added to cart!`);
    };
    
    return (
        <div className="px-6 py-10 bg-white-50 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Product</h1>
                <p className="text-gray-600 mb-8">Check out our featured products!</p>
            
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
                    {products.slice(0, 8).map((product) => (
                    <div key={product.id} className="border border-green-200 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 bg-white shadow-sm">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-contain bg-blue-50 p-4"/>
            
                        <div className="p-4 text-left">
                            <div className="flex items-center gap-2 text-sm text-grey-500 mb-2">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium truncate mb-1">{product.title}</p>
                            <p className="text-gray-600 text-sm mb-4">${product.price}</p>
                            <button onClick={() => handleAddToCart(product)} className="bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProduct;