import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Orders from "./Components/Orders/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth, analythics } from "./firebase";
import { useStateValue } from "./StateProivder";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // Observer on user sign in state(just logged in / was logged in)
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(
    "TRYING ANALYTICS IN LOG",
    analythics.logEvent("trying analaitcs", user)
  );
  analythics.logEvent("trying analaitcs", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Header searchfield={false} />
            <Login />
          </Route>

          <Route path="/orders">
            <Header searchfield={false} />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header searchfield={false} />
            <Checkout />
          </Route>
          {user && (
            <Route path="/payment">
              <Header searchfield={false} />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
          )}
          <Route path="/">
            <Header searchfield={true} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
