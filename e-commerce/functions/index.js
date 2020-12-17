const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Hz2QIJoORMgHmjIHYHvu4n9OcLcPFcn8JCgysuHGyzhF3MmsRVewFcsxNnGYe1lFjVRn6Fiofk65CQodTzLEZHN00BYlPNVZo"
);

// API

//APP config
const app = express();
app.use(express.json());
// MIDDLEWARES

app.use(cors({ origin: true }));

//API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("PAyment ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// LISTEN COMMAND
exports.api = functions.https.onRequest(app);
