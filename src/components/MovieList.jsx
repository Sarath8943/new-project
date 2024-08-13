import React from 'react'
import Movie from './Movie'



function MovieList({ movie }) {


    return (
        <div className='d-flex justify-content-evenly  ' >

            {movie.map((movies, index) => (
                <Movie  
                    title={movies.title}
                    image={movies.image}
                    description={movies.description}

                />
            ))}
        </div>
    )
}
    export default MovieList