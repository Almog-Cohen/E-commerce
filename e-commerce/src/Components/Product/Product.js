import React, { useState } from "react";
import "./Product.css";
// import Image from "./headphones.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProivder";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  //dispatch action
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
            .map(() => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      {/* fix here to image */}
      <Link to="checkout">
        <img src={image} alt="" />
      </Link>
      <button onClick={addToBasket}>Add to basket </button>
    </div>
  );
};

export default Product;
