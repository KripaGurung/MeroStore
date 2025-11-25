import React from "react";
import "./Featuredproduct.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="main-container">
      <h1 className="Heading">Featured Product</h1>
      <p className="second-heading">Check out our featured products!</p>

      <div className="product-container">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="card-container">
            <div className="image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="info-container">
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>

              <button onClick={() => handleAddToCart(product)} disabled={isInCart(product.id)} className={isInCart(product.id) ? "btn added-btn" : "btn add-btn"}>{isInCart(product.id) ? "Added" : "Add to cart"}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;