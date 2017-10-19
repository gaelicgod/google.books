import * as React from 'react';

import Book from '../book/book';

import BookModel from '../../data/bookModel';

interface Props {
    books: BookModel[]
}


export default class Books extends React.Component<Props, {}> {
    books = this.props.books;
    getBooks() {
        return this.books;
    }

    render() {
        const books = this.books.map((book, index) => {
            return <Book book={book} key={index}></Book>
        })

        return (<div>
            <h1>List of books:</h1>
            <div>{books}</div>
        </div>);
    }
}
