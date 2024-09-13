import React from "react";
import { useContext } from "react";
import { favContext } from "../../context/favContext";
import Button from '@mui/material/Button';
import './favs.css';

const FavItem = ({ manga }) => {
    const { addFavItemM, removeFavItemM, toggledFavM } = useContext(favContext);
    const isFavM = toggledFavM.includes(manga.id) === true;

    const handleFavClick = () => {
        if (isFavM) {
            removeFavItemM(manga);
        } else {
            addFavItemM(manga);
        }
    }

    return (
        <div onClick={handleFavClick} className="favToggle">
            {isFavM ? <Button variant="outlined" className="favToggle" color="primary.light">Remove from Favourites</Button> : <Button variant="outlined" className="favToggle" color="primary.light">Add to Favourites</Button>}
        </div>
    )
}

export default FavItem;