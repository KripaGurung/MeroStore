import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    const confirmed = window.confirm("Remove this item?");
    if (!confirmed) return;

    dispatch(removeFromCart(item.id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="H1">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-box">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-table">
              <div className="img-box">
                <img src={item.image} alt={item.title} className="item-img" />
                <div>
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">${item.price}</p>
                </div>
              </div>

              <button onClick={() => handleRemove(item)} className="remove-btn">Remove</button>
            </div>
          ))}

          <div className="total-box">
            Total: <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;