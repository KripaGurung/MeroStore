import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [id]);

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
    
    if (!product) {
        return <div className="text-center mt-10 text-gray-600">Loading...</div>;
    }
    
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div onClick={() => navigate(-1)} className="text-xl cursor-pointer mb-4 inline-block bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">←</div>
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex gap-9">
                <img src={product.image} alt="image" className="w-64 h-64 object-contain rounded-lg bg-gray-100"/>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h1>
                    <p className="text-justify text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-green-600 mb-3">$ {product.price}</p>
                    <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={`px-3 py-1 rounded-md text-sm ${isInCart(product.id) ? "bg-green-800 cursor-not-allowed text-white" : "bg-[#2e7d32] hover:bg-green-700 text-white"}`}>{isInCart(product.id) ? "Added " : "Add to cart"}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;