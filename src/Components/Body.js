import axios from 'axios';
import _ from 'lodash';
import React from 'react';

import SearchBar from './SearchBar';
import GifsContainer from './GifsContainer';
import Pagination from './Pagination';

const GIPHY_KEY = '5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f';
const GIPHY_URI = 'http://api.giphy.com/v1/gifs';
const SEARCH_URI = '/search';
const TRENDING_URI = '/trending';
const PAGE_SIZE = 25;

const getGiphyURI = (query, currentPage) => {
    if (query && query.length === 0) {
        return `${GIPHY_URI}${TRENDING_URI}?api_key=${GIPHY_KEY}&limit=${PAGE_SIZE}&offset=${currentPage * PAGE_SIZE}`;
    } else {
        return `${GIPHY_URI}${SEARCH_URI}?api_key=${GIPHY_KEY}&q=${query}&limit=${PAGE_SIZE}&offset=${currentPage * PAGE_SIZE}`;
    }
};

export default class Body extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            queryResults: [],
            page: 0,
            totalItems: 0
        };

        this.retrieveGifs = this.retrieveGifs.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    retrieveGifs(query) {
        const { page } = this.state;
        axios.get(getGiphyURI(query, page), {
            query,
            api_key: GIPHY_KEY
        }).then((result) => {
            const queryResults = _.get(result, 'data.data');
            const totalItems = _.get(result, 'pagination.total_count');

            if (queryResults && _.isArray(queryResults)) {
                this.setState({
                    queryResults,
                    totalItems
                });
            }
        });
    }

    componentDidMount() {
        this.retrieveGifs();
    }

    handleSearch(query) {
        this.retrieveGifs(query);
    }

    render() {
        const { queryResults, page, totalItems } = this.state;
        return (
            <div style={{ margin: '25px' }}>
                <SearchBar onSearch={this.handleSearch} />
                <GifsContainer gifs={queryResults} />
                <Pagination page={page} totalItems={totalItems} pageSize={PAGE_SIZE} />
            </div>
        );
    }
};