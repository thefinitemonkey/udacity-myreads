import React, {Component} from 'react';
import BookshelfChanger from './BookshelfChanger';

class Book extends Component {

    state = {
        shelfSelection: this.props.book.shelf || "none"
    }

    render = () => {
        // Iterate over the array of authors to create a single author string
        let authors = '';
        if (this.props.book.authors && Array.isArray(this.props.book.authors)) {
            this
                .props
                .book
                .authors
                .forEach(author => {
                    authors += author + ' | ';
                });
        }
        // Delete the last three charaters from the authors string
        authors = authors.slice(0, authors.length - 3);

        // Create thumbnail url
        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

        return (
            <div className="book">
                <div className="book-top">
                    <button className="book-cover-button" onClick={(e) => this.props.onUpdateQuickView(e, this.props.book)}>
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage: url
                        }}></div>
                    </button>
                    <BookshelfChanger book={this.props.book} onChangeShelf={this.props.onChangeShelf} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book;