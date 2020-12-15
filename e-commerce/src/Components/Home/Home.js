import React from "react";
import "./Home.css";
import Background from "./background.jpg";
import Product from "../Product/Product";
import image from "./headphones.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={Background} alt="" />

        <div className="home-row">
          <Product
            id={1}
            title="HeadPhones"
            image={image}
            price={29}
            rating={4}
          />
          <Product
            id={2}
            title="New Item Test"
            image={image}
            price={50}
            rating={4}
          />
          <Product image={image} />
        </div>

        <div className="home-row">
          <Product image={image} />
          <Product image={image} />
        </div>

        <div className="home-row">
          <Product image={image} />
          <Product image={image} />
          <Product image={image} />
        </div>
      </div>
    </div>
  );
};

export default Home;
