import React from "react";
import { useStateValue } from "../../StateProivder";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating, hideBtn }) => {
  const [{ basket }, dispatch] = useStateValue();

  // Dispatch remove action to remove item from the basket
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-infoTitle">{title}</p>
        <p className="checkoutProduct-infoPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-infoRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        {!hideBtn && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
