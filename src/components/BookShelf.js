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

        // ret
        return data.map(bookData => <Book
            moves={this.props.moves}
            book={bookData}
            key={bookData.id}
            id={bookData.id}
        />)
    }

    render() {
        console.log(books);
        return (
            <section>
                <h2 className="bookshelf-title">{this.props.headerTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.generateBooks(books)}
                    </ol>
                </div>
            </section>
        )
    }
}

export default BookShelf
