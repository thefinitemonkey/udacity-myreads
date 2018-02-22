import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {

    componentDidMount = () => {
        // Update the list of all books
        this.props.onRefreshAllBooks();
    }

    render = () => {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                            <input type="text" placeholder="Search by title or author"/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.props.books && this
                                .props
                                .books
                                .map(book => (
                                    <li key={book.id}>
                                        <Book book={book} onChangeShelf={this.props.onChangeShelf}/>
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;