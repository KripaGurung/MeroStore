import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.product.products);
    const cartItems = useSelector((state) => state.cart.items);

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.error("Error fetching products:", err));
    }, [dispatch]);


    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.title} added to cart!`);
    };

    const isInCart = (id) => cartItems.some(item => item.id === id);

    const filteredProducts = products.filter((p) => {
        const search = searchText.toLowerCase();
        const matchSearch = search === "" || p.category.toLowerCase().startsWith(search);
        const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
        return matchSearch && matchCategory;
    });

    return (
        <div className="product-container">
            <div className="search-and-filter">
                <div className="search-box">
                    <input type="text" placeholder="Search...."  className="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </div>

                <select className="filter-box" value={selectedCategory}  onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men</option>
                    <option value="women's clothing">Women</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewellery</option>
                </select>
            </div>

            <div className="car-container">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card-container">

                        <div className="image-card">
                            <img src={product.image} alt={product.title} className="pro-title"/>
                        </div>

                        <div className="product-card">
                            <div className="product-info">
                                <span className="product-price">${product.price}</span>
                                <span className="product-category">{product.category}</span>
                            </div>

                            <p className="product-text">{product.title}</p>

                            <div className="button-section">
                                <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
                                <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={`cart-btn ${isInCart(product.id) ? "added" : "add"}`}>{isInCart(product.id) ? "Added" : "Add to cart"}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;