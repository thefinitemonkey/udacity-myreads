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
                                        bookTitle={book.title}
                                        bookAuthor={book.authors[0]}
                                        shelfSelection={book.shelf}
                                        coverImage={book.imageLinks.smallThumbnail}/>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;