import React from 'react';
import SearchBar from './SearchBar';
import themoviedb from '../apis/themoviedb';
import MovieList from './MovieList';

class App extends React.Component{

    state = {
        movies: []
    };

    onSearchSubmit = async (term) => {
        const response = await themoviedb.get('/search/movie', {
            params: {
                query: term
            }
        });
        this.setState({movies: response.data.results});
    };

    render(){
        return (
            <div className="ui container">
                <h1>React Movie Search App</h1>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                {/* Found: {this.state.movies.length} movies */}
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default App;