import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FetchSeries.css";
import { SearchContext } from "../../context/searchContext";
import CircularProgress from '@mui/material/CircularProgress';

const FetchAnime = () => {
  const { search, category, setSearch } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [animeIds, setAnimeIds] = useState(new Set());
  const [debouncedSearchCategory, setDebouncedSearchCategory] = useState({search, category});

  useEffect(() => {
    setSearch("");
  }, [setSearch]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchCategory({search, category});
      setOffset(0); 
      setData([]); 
      setAnimeIds(new Set());
    }, 500); 

    return () => {
      clearTimeout(handler); 
    };
  }, [search, category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}&filter[text]=${debouncedSearchCategory.search}${
          debouncedSearchCategory.category ? `&filter[categories]=${debouncedSearchCategory.category}` : ""
        }`;
    
        const response = await fetch(url);
        const jsonData = await response.json();
        const newData = jsonData.data.filter((anime) => !animeIds.has(anime.id));
    
        setData((prevData) => [...prevData, ...newData]);
        setAnimeIds((prevIds) => new Set([...prevIds, ...newData.map((anime) => anime.id)]));
        console.log("Fetched Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [offset, debouncedSearchCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition >= documentHeight) {
        setOffset((prevOffset) => prevOffset + limit);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, limit]);

  return (
      <div className="seriescontainer">
        {data.length > 0 ? (
          data.map((anime) => (
            <div className="series" key={anime.id}>
              <Link to={`/anime/${anime.id}`}>
                <div className="seriesoverlay">
                  <p className="seriestitle">{anime.attributes.canonicalTitle}</p>
                  <p className="flavortext">Click to see more</p>
                  <img
                    className="seriesimg"
                    src={anime.attributes.posterImage.original}
                    alt={anime.attributes.canonicalTitle}
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <CircularProgress color="secondary" className="loader"/>
        )}
      </div>
  );
};

export default FetchAnime;