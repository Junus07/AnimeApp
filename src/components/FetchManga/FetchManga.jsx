import React, { useEffect, useState } from "react";
import "../FetchAnime/FetchSeries.css";
import { Link } from "react-router-dom";

const FetchManga = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [mangaIds, setMangaIds] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://kitsu.io/api/edge/manga?page[limit]=${limit}&page[offset]=${offset}`,
        );
        const jsonData = await response.json();
        const newData = jsonData.data.filter(
          (manga) => !mangaIds.has(manga.id),
        );
        setData((prevData) => [...prevData, ...newData]);
        setMangaIds(
          (prevIds) =>
            new Set([...prevIds, ...newData.map((manga) => manga.id)]),
        );
        console.log(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [offset]);

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
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FetchManga;
