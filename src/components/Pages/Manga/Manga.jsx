import React from "react";
import FetchManga from "../../FetchManga/FetchManga";
import SearchBar from "../../Search Bar/searchBar";
import CategorySearch from "../../CategorySearch/categorySearch";

const Manga = () => {

  return (
    <div>
      <CategorySearch />
      <SearchBar />
      <FetchManga />
    </div>
  );
};

export default Manga;
