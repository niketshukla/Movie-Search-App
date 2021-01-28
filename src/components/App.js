import React from 'react';
import SearchBar from './SearchBar';
import themoviedb from '../apis/themoviedb';

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
        console.log(response);
    };

    render(){
        return (
            <div className="ui container">
                <h1>React Movie Search App</h1>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;