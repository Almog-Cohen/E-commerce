const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
);

//copun code
const copunCode = "SALE50";

// API

//APP config
const app = express();
app.use(express.json());
// MIDDLEWARES

app.use(cors({ origin: true }));

//API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello"));

// Cupon route
app.post("/checkCopun", (req, res) => {
  const copun = req.query.copun;
  console.log("THIS IS WORKING" + copun);
  if (copun === copunCode) {
    res.status(200).send("Succuess");
  } else {
    res.status(400).send("Copun not match");
  }
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

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
