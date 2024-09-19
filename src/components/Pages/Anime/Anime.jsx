import React from "react";
import FetchAnime from "../../FetchAnime/FetchAnime";
import SearchBar from "../../Search Bar/searchBar";
import CategorySearch from "../../CategorySearch/categorySearch";

const Anime = () => {

  return (
    <div>
      <div className="search">
      <CategorySearch />
      <SearchBar />
      </div>
      <FetchAnime />
    </div>
  );
};

export default Anime;
