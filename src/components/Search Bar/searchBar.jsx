import React, { useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css';
import { SearchContext } from "../../context/searchContext";


const SearchBar = () => {
    const {search, setSearch} = useContext(SearchContext)
    

    return (
    <div className='searchContainer'>
      <div className='searchBar'>
        <SearchIcon />
        <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Search"></input>
      </div>
    </div>
    )
}

export default SearchBar;