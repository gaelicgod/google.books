import * as React from 'react';

import BookModel from '../../data/bookModel';

import ListItem from '../listItem/listItem';

interface Props {
    book: BookModel
}

export default class Book extends React.Component<Props, {}> {
    
    constructor(props:any) {
        super(props);
    }
    render() {
        const { book } = this.props;
        const authors = book.authors.map((author, index) => {
            return <ListItem key={index} listItem={author}></ListItem> 
        });

        return (<div>
            <h5>{book.title}</h5>
            <p>Authors</p>
            <ul className="booksList">
            {authors}
            </ul>
        </div>)
    }
}
