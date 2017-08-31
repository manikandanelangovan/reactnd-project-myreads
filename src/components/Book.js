import React, { Component } from 'react'

import ShelfChanger from './ShelfChanger'

class Book extends Component {
    constructor(props) {
        super(props);
        this.moveBookData = this.moveBookData.bind(this);
    }

    moveBookData(moveToShelf) {
        const move = this.props.moves;
        move(this.props, moveToShelf);
    }

    render() {
        return (
              <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.bookCover+')'}}>
                            <ShelfChanger moves={this.moveBookData} shelf={this.props.bookShelf} id={this.props.id} />
                        </div>
                    </div>
                    <div className="book-title">
                        {this.props.bookTitle}
                    </div>
                    <div className="book-authors">
                        {this.props.bookAuthor}
                    </div>
                </div>
              </li>
        )
    }
}

export default Book
