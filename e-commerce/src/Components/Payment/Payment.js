import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProivder";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase";

import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotalPrice } from "../../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { red } from "@material-ui/core/colors";

const Payment = () => {
  const [{ basket, user, copun }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // Generate the special stripe secret key which allows to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total currency in subunits
        url: `/payments/create?total=${
          getBasketTotalPrice(basket, copun) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    // Listen to changes in Card element
    setDisabled(e.empty);
    // Display any error as the customer types their card details
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Deliviry Adress</h3>
          </div>
          <div className="payment-adress">
            <p>{user?.email}</p>
            <p>Rishon</p>
            <p>Kapach</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and deleivry</h3>
          </div>
          <div className="payment-items">
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

        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                      {copun && <p style={{ color: "red" }}>You Saved 20%</p>}
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotalPrice(basket, copun)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
