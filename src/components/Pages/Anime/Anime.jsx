import React from "react";
import FetchAnime from "../../FetchAnime/FetchAnime";
import SearchBar from "../../Search Bar/searchBar";
import CategorySearch from "../../CategorySearch/categorySearch";

const Anime = () => {

  return (
    <div>
      <CategorySearch />
      <SearchBar />
      <FetchAnime />
    </div>
  );
};

export default Anime;
