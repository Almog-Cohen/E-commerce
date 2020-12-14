import React from "react";
import "./Home.css";
import Background from "./background.jpg";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={Background} alt="" />

        <div className="home-row">
          <Product />
        </div>

        <div className="home-row">
          <Product />
        </div>

        <div className="home-row">{/* {Product}  */}</div>
      </div>
    </div>
  );
};

export default Home;
