import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FetchSeries.css";
import { SearchContext } from "../../context/searchContext";

const FetchAnime = () => {
  const { search } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [animeIds, setAnimeIds] = useState(new Set());
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setOffset(0); // Reset offset when new search is triggered
      setData([]); // Clear previous results
      setAnimeIds(new Set()); // Clear previous IDs
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler); // Clear the timeout if search changes quickly
    };
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}&filter[text]=${debouncedSearch}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        const newData = jsonData.data.filter(
          (anime) => !animeIds.has(anime.id)
        );
        setData((prevData) => [...prevData, ...newData]);
        setAnimeIds(
          (prevIds) => new Set([...prevIds, ...newData.map((anime) => anime.id)])
        );
        console.log(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [offset, debouncedSearch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition >= documentHeight) {
        setOffset(offset + limit);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, limit]);

  const filteredData = data.filter((anime) =>
    anime.attributes.canonicalTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="seriescontainer">
        {filteredData.length > 0 ? (
          filteredData.map((anime) => (
            <div className="series" key={anime.id}>
              <Link to={`/anime/${anime.id}`}>
                <div className="seriesoverlay">
                  <p className="seriestitle">
                    {anime.attributes.canonicalTitle}
                  </p>
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
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default FetchAnime;