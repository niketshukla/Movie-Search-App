import './MovieList.css';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies}) => {
    // filter is used to remove the movies whose path is not provided
    const renderedList = movies.filter(movie => movie.poster_path).map((movie) => {
        // console.log(movie);
        return <MovieItem key={movie.id} movie={movie} />
    });
    return (
        <div className='rendered_list'>{renderedList}</div>
    )
};

export default MovieList;