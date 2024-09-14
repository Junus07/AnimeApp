import React from "react";
import Carousel from "../../carousel/carousel";
import Anime from '../../../components/Pages/Home/Film Data/Anime'; 
import "./home.css";

const Home = () => {
  return (
    <div className="home-main">
      <div className="carouselContainer">
        <Carousel />
      </div>
      <Anime />
    </div>
  );
};

export default Home;
