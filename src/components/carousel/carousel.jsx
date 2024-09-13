import React, { useEffect } from "react"; 
import { useState } from "react";
import './carousel.css';
import axios from "axios";
import { Link } from "react-router-dom";

function Carousel(){
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(0);

    useEffect(() => {
        const fetchBanners = async () => {
           try {
            const response = await axios.get('https://kitsu.io/api/edge/anime');
            const actualBanners = response.data.data.filter(anime => anime.attributes.coverImage)
            setBanners(actualBanners);
            setLoading(false);
           } 
           catch (error) {
                console.error(error);
           }
        }

        fetchBanners();
    }, []);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    function Next() {
        setOrder(order === banners.length - 1 ? 0 : order + 1);
    }

    function Previous() {
        setOrder(order === 0 ? banners.length - 1 : order - 1);
    }

    return(
        <div className="carousel">
            <div className="mapContainer">
            {banners.map(anime => (
                (
                    <div key={anime}>
                        <Link to = {`/anime/${anime.id}`}>
                            <img src={anime.attributes.coverImage && anime.attributes.coverImage.large} alt="" style={{transform: `translateX(${order * -100}%)`}} className="Banner"/>
                        </Link>
                    </div>
                )
            ))}
            {banners.map((anime, index) => (
                order === index && (
                <div className="BannerInfo" key={anime}>
                    <h1 className="BannerTitle" >{anime.attributes.titles.en_jp}</h1>
                    <h2 className="BannerEpisodes">Episodes: {anime.attributes.episodeCount}</h2>
                    <h2 className="BannerRating" >Rating: {anime.attributes.averageRating}</h2>
                </div>
                )  
            ))}
            </div>
            <button onClick={Previous} className="prev">{'<'}</button>
            <button onClick={Next} className="next">{'>'}</button>
            <div className="imagePag">
                {banners.map((banner, index) => (
                    <button onClick={() => setOrder(index)} className={ order === index ? "activeIndexButton" : "imageIndexButton"}></button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;