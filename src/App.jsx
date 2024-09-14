import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Anime from "./components/Pages/Anime/Anime.jsx";
import Manga from "./components/Pages/Manga/Manga.jsx";
import Favourites from "./components/Pages/Favourites/favourites.jsx";
import AboutA from "./components/Pages/About/AboutA.jsx";
import AboutM from "./components/Pages/About/AboutM.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/anime/:id" element={<AboutA />} />
        <Route path="/manga/:id" element={<AboutM />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
