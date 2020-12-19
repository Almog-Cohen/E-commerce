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
  { id: 1, title: "Headphones", image: headphonesImage, price: 70, rating: 4 },
  { id: 2, title: "Airpodes", image: airpodesImage, price: 300, rating: 5 },
  { id: 3, title: "Alexa", image: alexaImage, price: 120, rating: 2 },
  { id: 4, title: "Galaxy", image: galaxyImage, price: 800, rating: 5 },
  { id: 5, title: "Iphone 12", image: iphoneImage, price: 1200, rating: 5 },
  { id: 6, title: "JBL", image: jblImage, price: 80, rating: 3 },
  { id: 7, title: "PlayStation 5", image: psImage, price: 1200, rating: 4 },
  { id: 8, title: "Quadocopter", image: quadoImage, price: 1500, rating: 3 },
  { id: 9, title: "Apple watch", image: watchImage, price: 250, rating: 3 },
  { id: 10, title: "Xbox-360", image: xboxImage, price: 900, rating: 4 },
  { id: 11, title: "Headphones", image: headphonesImage, price: 70, rating: 4 },
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
