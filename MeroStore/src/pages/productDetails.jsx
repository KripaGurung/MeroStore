import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productdetails.css";

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
        return <div className="Load">Loading...</div>;
    }
    
    return (
        <div className="productDetailsContainer">
            <div onClick={() => navigate(-1)} className="arrowBtn">←</div>
            <div className="productImage">
                <img src={product.image} alt="image" className="picture"/>
                <div>
                    <h1 className="pTitle">{product.title}</h1>
                    <p className="pDescription">{product.description}</p>
                    <p className="pPrice">$ {product.price}</p>
                    <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={`cartBtn ${isInCart(product.id) ? "added" : "add"}`}>{isInCart(product.id) ? "Added" : "Add to cart"}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;