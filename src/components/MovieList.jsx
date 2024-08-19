import React from 'react'
import Movie from './Movie'



function MovieList({ movies }) {


    return (
        <div className='d-flex  flex-wrap  ' >

            {movies.map((movie, index) => (
                <Movie  

                key={index}
                    title={movie.title}
                    image={movie.image}
                    description={movie.description}

                />
            ))}
        </div>
    )
}
    export default MovieList