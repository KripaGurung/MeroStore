import React, { useEffect, useState } from "react";
import "./cart.css";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);
    
    const handleRemove = (item) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this item?");
        if (!confirmDelete) {
            return;
        }
        
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log("Removed item:", item);
        // alert("Item removed!");
    };
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    
    return (
        <div className="cartContainer">
            <h1 className="H1">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="cartMsg">Your cart is empty.</p>
                ) : (
                <div className="cartBox">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cartTable">
                            <div className="imgBox">
                                <img src={item.image} alt={item.title} className="itemImg"/>
                
                                <div>
                                    <p className="itemTitle">{item.title}</p>
                                    <p className="itemPrice">${item.price}</p>
                                </div>
                            </div>
                
                            <button onClick={() => handleRemove(item)} className="removeBtn">Remove</button>
                        </div>
                    ))}
                
                    <div className="totalBox">
                        Total:{" "}
                        <span className="totalPrice">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;