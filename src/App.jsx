import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import FetchAnime from './components/FetchAnime/FetchAnime.jsx';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <FetchAnime />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};


export default App;
