import React from "react";
import { useContext } from "react";
import { favContext } from "../../context/favContext";
import Button from "@mui/material/Button";
import "./favs.css";

const FavItem = ({ anime }) => {
  const { addFavItemA, removeFavItemA, toggledFavA } = useContext(favContext);
  const isFavA = toggledFavA.includes(anime.id) === true;

  const handleFavClick = () => {
    if (isFavA) {
      removeFavItemA(anime);
    } else {
      addFavItemA(anime);
    }
  };

  return (
    <div onClick={handleFavClick} className="favToggle">
      {isFavA ? (
        <Button variant="outlined" className="favToggle" color="primary.light">
          Remove from Favourites
        </Button>
      ) : (
        <Button variant="outlined" className="favToggle" color="primary.light">
          Add to Favourites
        </Button>
      )}
    </div>
  );
};

export default FavItem;
