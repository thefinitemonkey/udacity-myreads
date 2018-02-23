import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import BookQuickView from './BookQuickView';

class Bookshelves extends Component {

    state = {
        quickView: {}
    };

    componentDidMount = () => {
        // Update the list of all books
        this
            .props
            .onRefreshAllBooks();
    }

    updateShelves = () => {
        // Update the state of the individual shelves to contain the appropriate books
        // for each
        const newCurrent = {
            name: "Currently Reading",
            books: this
                .props
                .books
                .filter(book => book.shelf === 'currentlyReading')
        };
        const newWant = {
            name: "Want to Read",
            books: this
                .props
                .books
                .filter(book => book.shelf === "wantToRead")
        };
        const newRead = {
            name: "Read",
            books: this
                .props
                .books
                .filter(book => book.shelf === "read")
        };

        return ([newCurrent, newWant, newRead]);
    }

    updateQuickView = (e, book) => {
        e.preventDefault();
        // New book for a quick view
        this.setState({quickView: book, showModal: true});
    }

    closeQuickView = () => {
        this.setState({quickView: {}, showModal: false});
    }

    render = () => {
        let shelves = [];
        if (this.props.books && this.props.books.length) 
            shelves = this.updateShelves();
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {shelves && shelves.map((shelf) => (<Bookshelf
                                key={shelf.name}
                                shelf={shelf}
                                onChangeShelf={this.props.onChangeShelf}
                                onUpdateQuickView={this.updateQuickView}/>))}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
                <div className="shelves-quick-view">
                    <BookQuickView
                        book={this.state.quickView}
                        showModal={this.state.showModal}
                        onCloseModal={this.closeQuickView}
                        onChangeShelf={this.props.onChangeShelf}/>
                </div>
            </div>
        )
    }
}

export default Bookshelves;