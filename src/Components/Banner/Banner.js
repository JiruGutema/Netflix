import "./Banner.css";
import axios from "../../Utils/Axios";
import React, { useEffect, useState } from "react";
import requests from "../../Utils/Requests";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const movies = response?.data?.results || [];
        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          setMovie(movies[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching Netflix Originals: ", error);
      }
    };
    fetchData();
  }, []);
  const truncate = (str, length) => {
    return str?.length > length ? str.substring(0, length - 1) + "..." : str;
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner_fadeButton" />
    </div>
  );
};

export default Banner;
