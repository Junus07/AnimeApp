import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavItemM from "../../favItem/favItemM";
import axios from "axios";
import "./about.css";

const About = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/manga/${id}`,
        );
        setAnime(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, [id]);

  return (
    <div className="aboutContainer">
      {Object.keys(anime).length > 0 && (
        <div className="about">
          <img
            src={anime.attributes.posterImage.original}
            className="aboutPoster"
          />
          <div className="aboutInfo">
            <h1 className="aboutTitle">{anime.attributes.canonicalTitle}</h1>
            <p className="aboutDescription">{anime.attributes.description}</p>
          </div>
        </div>
      )}
      <FavItemM manga={anime} />
    </div>
  );
};

export default About;
