import _ from 'lodash';
import React from 'react';

export default class SearchBar extends React.Component{
    render() {
        const { gifs } = this.props;
        return (
            <div>
                {_.map(gifs, gif => (
                    <img src={`https://media.giphy.com/media/${gif.id}/giphy.gif`} alt={gif.title} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                ))}
            </div>
        );
    }
};