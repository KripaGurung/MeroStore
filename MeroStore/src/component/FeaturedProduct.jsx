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
        <div className="mainContainer">

            <h1 className="Heading">Featured Product</h1>
            <p className="secondHeading">Check out our featured products!</p>
            
            <div className="productContainer">

                {products.slice(0, 8).map((product) => (
                    <div key={product.id} className="cardContainer">
                        <img src={product.image} alt={product.title} className="imageContainer"/>
                    
                        <div className="infoContainer">

                            <p className="productTitle">{product.title}</p>
                            <p className="productPrice">${product.price}</p>
                            <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={isInCart(product.id) ? "btn addedBtn" : "btn addBtn"}>{isInCart(product.id) ? "Added" : "Add to cart"}</button>
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProduct;