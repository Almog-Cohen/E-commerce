import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProivder";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Observer on user sign in state(just logged in / was logged in)
    auth.onAuthStateChanged((authUser) => {
      console.log("THIS USER IS", authUser);
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

    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
