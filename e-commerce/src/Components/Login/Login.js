import React, { useState } from "react";
import "./Login.css";
import Logo from "../Header/logoe.webp";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [paswword, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //Firebase signin
    auth
      .signInWithEmailAndPassword(email, paswword)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => setError(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //Firebase register
    auth
      .createUserWithEmailAndPassword(email, paswword)
      .then((authObj) => {
        console.log(authObj);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={paswword}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login-signinBtn">
            Sign in
          </button>
        </form>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p>{"Join us and enjoy the best custom service. "}</p>
        )}
        <button onClick={register} className="login-createBtn">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
