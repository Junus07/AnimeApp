import React, { useEffect, useState, useContext } from "react";
import "../FetchAnime/FetchSeries.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import { CircularProgress } from "@mui/material";

const FetchManga = () => {
  const { search, category, setSearch } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [mangaIds, setMangaIds] = useState(new Set());
  const [debouncedSearchCategory, setDebouncedSearchCategory] = useState({search, category});

  useEffect(() => {
    setSearch("");
  }, [setSearch]);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchCategory({search, category});
      setOffset(0); 
      setData([]); 
      setMangaIds(new Set());
    }, 500); 

    return () => {
      clearTimeout(handler); 
    };
  }, [search, category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = debouncedSearchCategory.search
        ? `https://kitsu.io/api/edge/manga?page[limit]=${limit}&page[offset]=${offset}&filter[text]=${debouncedSearchCategory.search}${
          debouncedSearchCategory.category ? `&filter[categories]=${debouncedSearchCategory.category}` : ""}`

        : `https://kitsu.io/api/edge/manga?page[limit]=${limit}&page[offset]=${offset}${
          debouncedSearchCategory.category ? `&filter[categories]=${debouncedSearchCategory.category}` : ""}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        const newData = jsonData.data.filter(
          (manga) => !mangaIds.has(manga.id),
        );
        setData((prevData) => [...prevData, ...newData]);
        setMangaIds(
          (prevIds) => new Set([...prevIds, ...newData.map((manga) => manga.id)]),
        );
        console.log(jsonData.data);
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
        data.map((manga) => (
          <div className="series" key={manga.id}>
            <Link to={`/manga/${manga.id}`}>
              <div className="seriesoverlay">
                <p className="seriestitle">{manga.attributes.canonicalTitle}</p>
                <p className="flavortext">Click to see more</p>
                <img
                  className="seriesimg"
                  src={manga.attributes.posterImage.original}
                  alt={manga.attributes.canonicalTitle}
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

export default FetchManga;
