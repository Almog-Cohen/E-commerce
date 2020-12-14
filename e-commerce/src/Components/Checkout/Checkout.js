import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        {/* <img className='checkout_ad'></img> */}
        <div>
          <h2 className="chekout-title"> Your basket shopping is:</h2>
          {/* <BasketItem /> */}
        </div>
      </div>

      <div className="checkout-right">
        <h2>Sub total</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
