import React, { useState } from "react";
import FetchAnime from "../../FetchAnime/FetchAnime";
import SearchBar from "../../Search Bar/searchBar";

const Anime = () => {

  return (
    <div>
      <SearchBar />
      <FetchAnime />
    </div>
  );
};

export default Anime;
