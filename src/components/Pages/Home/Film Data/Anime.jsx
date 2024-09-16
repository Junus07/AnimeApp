import React, { useEffect, useState } from 'react';
import './Anime.css';
import { Link } from 'react-router-dom';

const Anime = () => {
  const [animeList, setAnimeList] = useState([]);

  // API fetching time
  const fetchAdventure = async () => {
    try {
      const response = await fetch("https://kitsu.io/api/edge/anime");
      const data = await response.json();
      setAnimeList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

    const fetchRomance = async () => {
      try {
        const response = await fetch('https://kitsu.io/api/edge//anime?filter[categories]=romance');
        const data = await response.json();
        setAnimeList((prevData) => [...prevData, ...data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchAdventure();
      fetchRomance();
    }, []);

  return (
    <div className='Anime'>
          {animeList.slice(0, 11).map((anime) => (
          <Link to={`/anime/${anime.id}`}>
            <div className="carousel__item" key={anime.id}>
              <img className='Anime__img' src={anime.attributes.posterImage.original} alt={anime.title} />
            </div>
          </Link>
          ))}
    </div>
  );
};

export default Anime;
