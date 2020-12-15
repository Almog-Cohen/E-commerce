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
          <Product
            id={2}
            title="New Item Test"
            image={image}
            price={50}
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id={2}
            title="New Item Test"
            image={image}
            price={54}
            rating={4}
          />
          <Product
            id={2}
            title="New Item Test"
            image={image}
            price={100}
            rating={3}
          />
        </div>

        <div className="home-row">
          <Product
            id={2}
            title="New Item Test"
            image={image}
            price={35}
            rating={4}
          />
          <Product
            id={2}
            title="New Item Test"
            image={image}
            price={30}
            rating={4}
          />
          <Product
            id={5}
            title="New Item Test"
            image={image}
            price={10}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
