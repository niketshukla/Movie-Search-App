import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{

    state = {
        term: ''
    };

    OnSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    };

    render(){
        return (
            <div className="searchbar ui segment">
                <form onSubmit={this.OnSubmit} className="ui form">
                    <div className="field">
                        <label>Movie Name</label>
                        <input className="ui input" type="text" value={this.state.term} placeholder='i.e. Jurassic Park' onChange={this.onInputChange} />
                        <button className="ui secondary button" type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;