import React, { useEffect, useState } from "react";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
  }, []);

  return (
        <div className="px-6 py-10 bg-white-50 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Product</h1>
            <p className="text-gray-600 mb-8">Check out our featured products!</p>
        
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {products.map((product) => (
                    <div key={product.id} className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white shadow-sm">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-contain bg-green-50 p-4"/>
                    
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500 mb-2 justify-center">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Available</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium truncate">{product.title}</p>
                            <p className="text-gray-600 text-sm">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProduct;
