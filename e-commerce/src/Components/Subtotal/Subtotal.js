import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { useStateValue } from "../../StateProivder";
import { getBasketTotalPrice } from "../../reducer";
import { useHistory } from "react-router-dom";
const Subtotal = () => {
  const [{ basket, copun, user }, dispatch] = useStateValue();
  const [copunText, setCopunText] = useState("");
  // Push programitcally the user into path
  const history = useHistory();

  // const copunStatus = () => {
  //   return
  // }

  const checkCopun = (e) => {
    e.preventDefault();
    const response = axios({
      method: "post",
      // Stripe expects the total currency in subunits
      url: `/checkCopun?copun=${copunText}`,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "ADD_COPUN",
          copun: true,
        });
      }
    });
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              {!copun ? (
                <div>
                  <input
                    type="text"
                    value={copunText}
                    placeholder="Please enter copun"
                    onChange={(e) => setCopunText(e.target.value)}
                  />
                  <button className="subtotal-gift-btn" onClick={checkCopun}>
                    Check
                  </button>
                </div>
              ) : (
                <p style={{ color: "red" }}>You got 20% discount</p>
              )}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotalPrice(basket, copun)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {user ? (
        <div>
          <button onClick={(e) => history.push("/payment")}>
            Procced to checkout
          </button>
        </div>
      ) : (
        <p style={{ color: "red" }}>Please login to procced to checkout</p>
      )}
    </div>
  );
};

export default Subtotal;
