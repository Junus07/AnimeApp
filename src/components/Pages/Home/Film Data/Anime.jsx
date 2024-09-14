import React, { useEffect, useState } from 'react';
import './Anime.css';

const Anime = () => {
  const [animeList, setAnimeList] = useState([]);

  // API fetching time
  const fetchAdventure = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime');
      const data = await response.json();
      setAnimeList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

    // const fetchRomance = async () => {
    //   try {
    //     const response = await fetch('https://kitsu.io/api/edge//anime?filter[categories]=romance');
    //     const data = await response.json();
    //     setAnimeList(data.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    useEffect(() => {
      fetchAdventure();
      // fetchRomance();
    }, []);

  return (
    <div className='Anime'>
      <div className="carousel">
        <div className="carousel__container">
          {animeList.slice(0, 12).map((anime) => (
            <div className="carousel__item" key={anime.mal_id}>
              <img className='Anime__img' src={anime.images.jpg.large_image_url} alt={anime.title} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Anime;
