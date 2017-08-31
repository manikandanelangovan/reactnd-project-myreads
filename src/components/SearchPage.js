import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

import BookShelf from './BookShelf'

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }        
        this.searchBook = this.searchBook.bind(this);
    }

    searchBook(e) {
    const query = e.target.value.trim()
    if(query !== '') {
      BooksAPI.search(query).then((searchResult) => {
        if(!searchResult.error) {
          searchResult.map(book => {
            book.shelf = ''
            this.props.currentBooks.forEach(function(element) {
              if(element.id.match(book.id)) {
                if(!book.shelf.match('none')) {
                  book.shelf = element.shelf
                }
              }
            }, this);
            return book
          })
          this.setState({results: searchResult})
        }
      })
    } else {
      this.setState({results: []})
    }
  }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.searchBook} placeholder="Search by title or author"/>
                    </div>
                </div>
                <BookShelf value="Search" shelf={this.state.shelf} headerTitle="" books={this.state.results} moves={this.props.moves} />
            </div>
        )
    }
}

export default SearchPage
