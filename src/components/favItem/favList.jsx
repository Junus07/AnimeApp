import React from "react";
import { favContext } from "../../context/favContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import './favs.css'
import '../FetchAnime/FetchSeries.css'

const FavList = () => {
    const {favItemsA, favItemsM} = useContext(favContext);

    return (
      <div className="allFav">
        <div className='seriescontainer'>
            {favItemsA.length > 0 && (
              <div>
              <h1 className="favType">Favourite Anime</h1>
              <div className="favContainer">
              {favItemsA.map((anime) => (
                <div className='favSeries' key={anime.id}>
                  <Link to={`/anime/${anime.id}`}>
                    <div className='seriesoverlay'>
                      <p className='seriestitle'>{anime.attributes.canonicalTitle}</p>
                      <p className='flavortext'>Click to see more</p>
                      <img className='seriesimg' src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
                    </div>
                  </Link>
                </div>
              ))}
              </div>
              </div>
            )}
            </div>
            <div className='seriescontainer'>
            {favItemsM.length > 0 && (
              <div>
              <h1 className="favType">Favourite Manga</h1>
              <div className="favContainer">
              {favItemsM.map((manga) => (
                <div className='favSeries' key={manga.id}>
                  <Link to={`/manga/${manga.id}`}>
                    <div className='seriesoverlay'>
                      <p className='seriestitle'>{manga.attributes.canonicalTitle}</p>
                      <p className='flavortext'>Click to see more</p>
                      <img className='seriesimg' src={manga.attributes.posterImage.original} alt={manga.attributes.canonicalTitle} />
                    </div>
                  </Link>
                </div>
              ))}
              </div>
              </div>
            )}

            {favItemsA.length === 0 && favItemsM.length === 0 && (
              <h1 className="noFavs">You don't have any favourites</h1>
            )}
            </div>
          </div>
          );
}

export default FavList;
