import _ from 'lodash';
import React from 'react';

export default class Pagination extends React.Component {
    render() {
        const { page, pageSize, totalItems } = this.props;

        const maxPage = _.ceil(totalItems / pageSize);

        return (
            <div>
                Page:
                {page > 0 && <span>&lt;</span>}
                <span>{page + 1}</span>
                {maxPage > page && <span>&gt;</span>}
            </div>
        );
    }
};