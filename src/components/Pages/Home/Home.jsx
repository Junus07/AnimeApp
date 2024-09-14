import React from "react";
import Carousel from "../../carousel/carousel";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";
import "../../../responsive.css";
import { isMobile } from "react-device-detect";

const Home = () => {
  return isMobile ? (
    <div className="carouselContainer">
      <Header />
      <Carousel />
    </div>
  ) : (
    <div className="carouselContainer">
      <Header />
      <Sidebar />
      <Carousel />
    </div>
  );
};

export default Home;
