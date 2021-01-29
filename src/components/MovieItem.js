import React from 'react';

const MovieItem = ({ movie }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.original_title} />
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
        </div>
    )
};

export default MovieItem;