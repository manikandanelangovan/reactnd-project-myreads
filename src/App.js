import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import HomePage from './components/HomePage'
import './App.css'

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.storeBookData = this.storeBookData.bind(this);
    this.moveBook = this.moveBook.bind(this);
  }

  storeBookData(bookData) {
    this.setState({
      books: bookData
    })
  }
  
  moveBook(book, toShelf) {
    BooksAPI.update(book, toShelf).then(response => {
      // make sure you set the shelf!
      book.shelf = toShelf  
      this.setState((state) => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookData) => this.storeBookData(bookData));
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={({history}) => (
          <SearchPage moves={this.moveBook} currentBooks={this.state.books} />
        )} />
        <Route exact path='/' render={ ({history}) => (
          <HomePage moves={this.moveBook} bookData={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
