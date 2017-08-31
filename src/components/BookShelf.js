import React, { Component } from 'react'

import Book from '../components/Book'

class BookShelf extends Component {
    constructor(props){
        super(props);
        this.generateBooks = this.generateBooks.bind(this);
    }

    generateBooks(data) {
        if(data === "undefined")
            return console.log('Data is undefined');

        return data.map(bookData => <Book
            moves={this.props.moves}
            bookTitle={bookData.title}
            bookAuthor={bookData.authors}
            bookShelf={bookData.shelf}
            bookCover={bookData.url || bookData.imageLinks.thumbnail}
            key={bookData.id}
            id={bookData.id}
        />)
    }

    render() {
        return (
            <section>
                <h2 className="bookshelf-title">{this.props.headerTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.generateBooks(this.props.books)}
                    </ol>
                </div>
            </section>
        )
    }
}

export default BookShelf
