import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProivder } from "./StateProivder";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProivder initialState={initialState} reducer={reducer}>
      <App />
    </StateProivder>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
