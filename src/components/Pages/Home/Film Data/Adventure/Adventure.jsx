import React, { useEffect, useState } from 'react';
import '../Anime.css';

const Adeventure = () => {
  const [animeList, setAnimeList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime');
      const data = await response.json();
      setAnimeList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='Anime'>
          {animeList.slice(0, 12).map((anime) => (
            <div className="carousel__item" key={anime.mal_id}>
              <img className='Anime__img' src={anime.images.jpg.large_image_url} alt={anime.title} />
            </div>
          ))}
    </div>
  );
};

export default Adeventure;
