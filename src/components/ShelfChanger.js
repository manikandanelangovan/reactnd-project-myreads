import React, { Component } from 'react'

class ShelfChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shelf: this.props.shelf
        };
        this.changeShelf = this.changeShelf.bind(this);
    }



    changeShelf(e) {
        this.props.moves(e.target.value)
    }

    render() {
      const getShelf = (books, id) => {
        const book = books.find(b => b.id === id)
        return (book && book.shelf) ? book.shelf : 'none'
      }
        const OPTIONS = [
            {'caption': 'Move To...', 'value': 'none', 'status': 'disabled'},
            {'caption': 'Currently Reading', 'value': 'currentlyReading', 'status': 'enabled'},
            {'caption': 'Want To Read', 'value': 'wantToRead', 'status': 'enabled'},
            {'caption': 'Read', 'value': 'read', 'status': 'enabled'},
            {'caption': 'Remove', 'value': 'remove', 'status': 'enabled'}
        ];

        return (
            <div className="book-shelf-changer">
                <select onChange={this.changeShelf} value={this.props.shelf}>
                    {OPTIONS.map((option) => (
                        <option disabled={option.status === "disabled"?true:false}
                        value={option.value} key={option.value}>{option.caption}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default ShelfChanger
