import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = { query: '' };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        const { query } = this.state;
        const { onSearch } = this.props;

        event.preventDefault();

        onSearch(query);
    }

    render() {
        const { query } = this.state; 
        const { onSearch } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input onChange={event => this.setState({ query: event.target.value })} placeholder="Search Gifs" />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
};