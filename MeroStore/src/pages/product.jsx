import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./product.css"

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
            p.category.toLowerCase().startsWith(search.toLowerCase());

        const matchCategory =
            selectedCategory === "all" ||
            p.category === selectedCategory;

        return matchSearch && matchCategory;
    });

    return (
        <div className="productContainer">
            
            <div className="searchAndFilter">
                <div className="searchBox">
                    <input type="text" placeholder="Search...."  className="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </div>

                <select className="filterBox" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men</option>
                    <option value="women's clothing">Women</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewellery</option>
                </select>
            </div>

            <div className="carContainer">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="productCardContainer">
                        
                            <div className="imageCard">
                                <img src={product.image} alt={product.title} className="proTitle"/>
                            </div>
                        
                        <div className="productCard">
                            <div className="productInfo">
                                <span className="productPrice">${product.price}</span>
                                <span className="productCategory">{product.category}</span>
                            </div>

                            <p className="productText">{product.title}</p>

                            <div className="buttonSection">
                                <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
                                <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={`cartBtn ${isInCart(product.id) ? "added" : "add"}`}>{isInCart(product.id) ? "Added" : "Add to cart"}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;