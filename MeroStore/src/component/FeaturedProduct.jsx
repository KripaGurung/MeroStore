import React, { useEffect } from "react";
import "./Featuredproduct.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { setLoading, setProducts, setError } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(setLoading());

      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => dispatch(setProducts(res.data)))
        .catch((err) => {
          console.log(err);
          dispatch(setError("Failed to load products"));
        });
    }
  }, [products, dispatch]);

  if (loading) {
    return <h2 className="loading-text">Loading featured products...</h2>;
  }

  return (
    <div className="main-container">
      <h1 className="Heading">Featured Product</h1>
      <p className="second-heading">Check out our featured products!</p>

      <div className="product-container">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="card-container">

            {/* Product Image clickable */}
            <Link to={`/product/${product.id}`} className="image-wrapper">
              <img src={product.image} alt={product.title} />
            </Link>

            <div className="info-container">
              {/* Product Title clickable */}
              <Link to={`/product/${product.id}`} className="product-title">
                {product.title}
              </Link>

              <p className="product-price">${product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
                className={isInCart(product.id) ? "btn added-btn" : "btn add-btn"}
              >
                {isInCart(product.id) ? "Added" : "Add to cart"}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;