import React from 'react';
import SearchBar from './SearchBar';
import themoviedb from '../apis/themoviedb';
import MovieList from './MovieList';

class App extends React.Component{

    state = {
        movies: []
    };

    componentDidMount = () => {
        this.onDefaultList();
    }

    onDefaultList = async () => {
        const responseDefault = await themoviedb.get('/discover/movie');
        this.setState({movies: responseDefault.data.results});
        // console.log({movies: responseDefault.data.results});
    }

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
                <h1 className='app_header'>React Movie Search App</h1>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                {/* Found: {this.state.movies.length} movies */}
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default App;