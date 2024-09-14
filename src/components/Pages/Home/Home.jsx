import React from 'react';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Caruousel from '../../Pages/Home/Carousel/Caru';
import Anime from '../../../components/Pages/Home/Film Data/Anime'; 
import './Home.css'; 

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-content'>
        <Sidebar />
        <main className='home-main'>
        <Caruousel />
        <div className='Film_Data'>
          <Anime/>
        </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
