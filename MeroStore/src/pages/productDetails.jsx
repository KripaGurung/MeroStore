import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productdetails.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.items);

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <div className="Load">Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`);
  };

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="product-details-container">
      <div onClick={() => navigate(-1)} className="arrow-btn">←</div>

      <div className="product-image">
        <img src={product.image} alt="image" className="picture"/>
        <div>
          <h1 className="p-title">{product.title}</h1>
          <p className="p-description">{product.description}</p>
          <p className="p-price">$ {product.price}</p>

          <button onClick={handleAddToCart} disabled={isInCart(product.id)} className={`cart-btn ${isInCart(product.id) ? "added" : "add"}`}>{isInCart(product.id) ? "Added" : "Add to cart"}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;