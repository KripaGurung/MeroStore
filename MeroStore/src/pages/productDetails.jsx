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
    
    if (!product) {
        return <div className="text-center mt-10 text-gray-600">Loading...</div>;
    }
    
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div onClick={() => navigate(-1)} className="text-xl cursor-pointer mb-4 inline-block bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">←</div>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 flex gap-6">
                <img src={product.image} alt="image" className="w-64 h-64 object-contain rounded-lg bg-gray-100"/>
                
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h1>
                    <p className="text-lg font-bold text-green-600 mb-3">$ {product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                        
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;