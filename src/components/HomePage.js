import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class HomePage extends Component {
    render() {
    const bookData = this.props.bookData


    const SHELVES = [
            {'name': 'currentlyReading', 'title': 'Currently Reading'},
            {'name': 'wantToRead', 'title': 'Want To Read'},
            {'name': 'read', 'title': 'Read'}
        ];

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {SHELVES.map((shelf) => (
                        <BookShelf headerTitle={shelf.title} books={bookData.filter((book) => book.shelf === shelf.name)} moves={this.props.moves} key={shelf.name} value={shelf.name} />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
        )
    }
}

export default HomePage
