import React, { useEffect, useState } from "react";

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
        alert("Item removed!");
    };
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    
    return (
        <div className="min-h-screen bg-white px-6 py-8">
            <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
                ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border p-4 rounded-xl shadow-sm bg-gray-50">
                            <div className="flex gap-4 items-center">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain"/>
                
                                <div>
                                    <p className="font-medium text-gray-800">{item.title}</p>
                                    <p className="text-gray-600 text-sm">${item.price}</p>
                                </div>
                            </div>
                
                            <button onClick={() => handleRemove(item)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm">Remove</button>
                        </div>
                    ))}
                
                    <div className="text-xl font-semibold mt-6">
                        Total:{" "}
                        <span className="text-green-700">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
