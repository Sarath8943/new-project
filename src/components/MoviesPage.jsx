import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from './Header';
import MovieList from "./MovieList";

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          {
            params: {
              api_key: "be22f3eb4ce78bc22cd607c9fa72c0c1"
            }
          }
        );

        const results = response.data.results;
        const formattedMovies = results.map((movie) => ({
          title: movie.original_title,
          image:movie.poster_path,
          description: movie.overview
        }));
   console.log(formattedMovies)
        setMovies(formattedMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;