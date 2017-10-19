import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { render } from 'react-dom';

import Books from './components/books/books';
import BookViewModel from './viewModels/bookViewModel';

interface Props {

}

interface State {
    books:BookViewModel[],
    hasError:boolean
}



class App extends React.Component<Props, State>{
    apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    searchTerm = 'Space';

    constructor(props:any) {
        super(props);
    }

    async componentWillMount() {
        await this.setStateAsync({ 
            hasError: false,
            books: []
        });
    }

    setStateAsync(state:any) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }
    async getBooks() {
        const url = `${this.apiUrl}${this.searchTerm}`;
        const results = await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.items);
                const newBooks:BookViewModel[] = data.items.map((googleBook:any) => {
                    const { title, authors, industryIdentifiers, imageLinks } = googleBook.volumeInfo;
                    return {
                        title,
                        authors,
                        isbn: industryIdentifiers[0].identifier,
                        imageUrl: imageLinks.smallThumbnail
                    }
                });
                return newBooks;
            })
            .catch((reason) => {
                console.log(`error fetching url[${url}] => ${reason}`);
            });
        return results;
    }

    async componentDidMount() {
        const books = await this.getBooks();
        await this.setStateAsync({ books });
    }

    async componentDidCatch(error:any, info:any) {
        console.log(error, info);
        await this.setStateAsync({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return(
                <div className="app col-md-12">
                    <h1>An error has occurred</h1>
                </div>
            )
        }
        if (this.state.books.length) {
            return (
                <div className="app col-md-12">
                    <Books books={this.state.books} />
                </div>
            )
        }
        return(
            <div className="app col-md-12">
                Loading Books...
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
