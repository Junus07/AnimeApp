import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './FetchSeries.css'

const FetchAnime = () => {
    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)
    const [animeIds, setAnimeIds] = useState(new Set())
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}`)
          const jsonData = await response.json()
          const newData = jsonData.data.filter(anime => !animeIds.has(anime.id))
          setData(prevData => [...prevData, ...newData])
          setAnimeIds(prevIds => new Set([...prevIds, ...newData.map(anime => anime.id)]))
          console.log(jsonData.data)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      };
    
      fetchData()
    }, [offset])

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight
        const documentHeight = document.body.offsetHeight

        if (scrollPosition >= documentHeight) {
            setOffset(offset + limit)
        }
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, [offset,limit])

  return (
<div className='seriescontainer'>
    {data.length > 0 ? (
      data.map((anime) => (
        <div className='series' key={anime.id}>
          <Link to={`/anime/${anime.id}`}>
            <div className='seriesoverlay'>
              <p className='seriestitle'>{anime.attributes.canonicalTitle}</p>
              <p className='flavortext'>Click to see more</p>
              <img className='seriesimg' src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
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

export default FetchAnime