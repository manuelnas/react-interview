import _ from 'lodash';
import React from 'react';

export default class Pagination extends React.Component {
    render() {
        const { page, pageSize, totalItems, onSetPage } = this.props;

        const maxPage = _.ceil(totalItems / pageSize);

        return (
            <div>
                Page:
                {page > 0 && <span onClick={() => onSetPage(page - 1)}>&lt;</span>}
                <span>{page + 1}</span>
                {maxPage > page && <span onClick={() => onSetPage(page + 1)}>&gt;</span>}
            </div>
        );
    }
};