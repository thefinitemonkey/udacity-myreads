import React, {Component} from 'react';
import Book from './Book';

class Bookshelf extends Component {

    render = () => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this
                            .props
                            .shelf
                            .books
                            .map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onChangeShelf={this.props.onChangeShelf}
                                        onUpdateQuickView={this.props.onUpdateQuickView}/>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;