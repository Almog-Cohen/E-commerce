import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product-info">
        <p>Hello world</p>
        <p className="product-price">
          <small>$</small>
          <strong>100</strong>
        </p>
        <div className="product-rating">
          <p>&#11088;</p>
          <p>&#11088;</p>
          <p>&#11088;</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
