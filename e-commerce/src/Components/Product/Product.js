import React from "react";
import "./Product.css";
import Image from "./headphones.png";
import { Link } from "react-router-dom";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      {/* fix here to image */}
      <Link to="checkout">
        <img src={Image} alt="" />
      </Link>
      <button>Add to basket </button>
    </div>
  );
};

export default Product;
