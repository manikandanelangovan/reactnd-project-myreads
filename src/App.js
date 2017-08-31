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
   BooksAPI.getAll().then((data) => {
    //   BooksAPI.update(book, toShelf).then((bookId) => {
    //     this.setState((prevState) => {
    //       return { books: prevState.books.map((findBook) => {
    //         if(book.id === findBook.id) {
    //           findBook.shelf = toShelf
    //         }
    //         return findBook;
    //       })}
    //     })
    //   });
      BooksAPI.update(book, toShelf).then(
        this.setState((state) => ({
          books: state.books.filter((b) => b.id !== book.id).concat([book])
        }))
      )
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
