import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Product = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
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

    const filteredProducts = products.filter((p) => {
        const search = searchText.toLowerCase();

        const matchSearch =
            search === "" ||
            p.category.toLowerCase().includes(search);

        const matchCategory =
            selectedCategory === "all" ||
            p.category === selectedCategory;

        return matchSearch && matchCategory;
    });

    return (
        <div className="min-h-screen px-6 py-8 bg-white flex flex-col items-center">
            
            <div className="flex gap-3 items-center mb-8">
                <div className="flex items-center border-2 border-green-400 rounded-full px-4 py-2 w-80 shadow-sm bg-white">
                    <input type="text" placeholder="Search...."  className="flex-grow outline-none bg-transparent text-gray-700" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </div>

                <select className="border border-green-400 rounded-full px-3 py-2 shadow-sm" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men</option>
                    <option value="women's clothing">Women</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewellery</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border border-green-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-gray-50 flex flex-col gap-5">
                        
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                            <img src={product.image} alt="image" className="h-48 w-96 object-scale-down" />
                        </div>

                        <div className="p-4 flex flex-col flex-grow gap-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-500 text-xs">${product.price}</span>
                                <span className="text-gray-500 text-xs">{product.category}</span>
                            </div>

                            <p className="text-gray-800 font-semibold text-sm mb-2 line-clamp-1">{product.title}</p>

                            <div className="flex justify-between mt-auto">
                                <button onClick={() => navigate(`/product/${product.id}`)} className="border border-green-300 text-black px-3 py-1 rounded-md text-sm hover:bg-green-400">View Details</button>
                                <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={`px-3 py-1 rounded-md text-sm ${isInCart(product.id) ? "bg-green-800 cursor-not-allowed text-white" : "bg-[#2e7d32] hover:bg-green-700 text-white"}`}>{isInCart(product.id) ? "Added " : "Add to cart"}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
