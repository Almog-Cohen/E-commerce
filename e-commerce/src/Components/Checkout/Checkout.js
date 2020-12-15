import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProivder";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        {/* <img className='checkout_ad'></img> */}
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="chekout-title"> Your basket shopping is:</h2>
          {basket.map((basketItem) => (
            <CheckoutProduct
              id={basketItem.id}
              title={basketItem.title}
              image={basketItem.image}
              price={basketItem.price}
              rating={basketItem.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
