import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProivder";
import { getBasketTotalPrice } from "../../reducer";
import { useHistory } from "react-router-dom";
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  // Push programitcally the user into path
  const history = useHistory();

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
              <input type="checkbox" />
              This order contains small gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Procced to checkout
      </button>
    </div>
  );
};

export default Subtotal;
