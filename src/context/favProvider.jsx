import { useState } from "react";
import { favContext } from "./favContext";

const FavProvider = ({ children }) => {
  const [favItemsA, setFavItemsA] = useState([]);
  const [toggledFavA, setToggledFavA] = useState([]);
  const [favItemsM, setFavItemsM] = useState([]);
  const [toggledFavM, setToggledFavM] = useState([]);

  const addFavItemA = (anime) => {
    setFavItemsA((prevList) => [...prevList, anime]);
    setToggledFavA((prevList) => [...prevList, anime.id]);
  };

  const removeFavItemA = (anime) => {
    setFavItemsA((prevList) => prevList.filter((i) => i !== anime));
    setToggledFavA((prevList) => prevList.filter((i) => i !== anime.id));
  };

  const addFavItemM = (manga) => {
    setFavItemsM((prevList) => [...prevList, manga]);
    setToggledFavM((prevList) => [...prevList, manga.id]);
  };

  const removeFavItemM = (manga) => {
    setFavItemsM((prevList) => prevList.filter((i) => i !== manga));
    setToggledFavM((prevList) => prevList.filter((i) => i !== manga.id));
  };

  return (
    <favContext.Provider
      value={{
        favItemsA,
        addFavItemA,
        removeFavItemA,
        toggledFavA,
        favItemsM,
        addFavItemM,
        removeFavItemM,
        toggledFavM,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavProvider;
