import React from "react";
import "./Home.css";
import Background from "./images/background.jpg";
import Product from "../Product/Product";
import headphonesImage from "./images/headphones.webp";
import airpodesImage from "./images/airpods.webp";
import alexaImage from "./images/alexa.webp";
import galaxyImage from "./images/galaxy.webp";
import iphoneImage from "./images/iphone.webp";
import jblImage from "./images/jbl.webp";
import psImage from "./images/ps.webp";
import quadoImage from "./images/quadocopter.webp";
import watchImage from "./images/watch.webp";
import xboxImage from "./images/xbox.webp";
import { useStateValue } from "../../StateProivder";

const productsList = [
  { id: 1, title: "Headphones", image: headphonesImage, price: 50, rating: 5 },
  { id: 2, title: "Headphones", image: airpodesImage, price: 50, rating: 5 },
  { id: 3, title: "david", image: alexaImage, price: 50, rating: 5 },
  { id: 4, title: "gam", image: galaxyImage, price: 50, rating: 5 },
  { id: 5, title: "hey", image: iphoneImage, price: 50, rating: 5 },
  { id: 6, title: "hey", image: jblImage, price: 50, rating: 5 },
  { id: 7, title: "hey", image: psImage, price: 50, rating: 5 },
  { id: 8, title: "hey", image: quadoImage, price: 50, rating: 5 },
  { id: 9, title: "hey", image: watchImage, price: 50, rating: 5 },
  { id: 10, title: "hey", image: xboxImage, price: 50, rating: 5 },
  { id: 11, title: "hey", image: headphonesImage, price: 50, rating: 5 },
];

const Home = () => {
  const [{ searchText }, dispatch] = useStateValue();

  const filteredProduces = productsList.filter((product) => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={Background} alt="" />

        <div className="home-row">
          {filteredProduces.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
