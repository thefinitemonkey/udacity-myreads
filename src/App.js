import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';
import Search from './Search';
import Bookshelves from './Bookshelves';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    this.refreshAllBooks();
  }

  refreshAllBooks = () => {
    // Get the books currently on the bookshelves and update the state with the
    // returned list
    BooksAPI
      .getAll()
      .then((list) => {
        this.setState({books: list});
      });
  }

  changeShelf = (book, shelf) => {
    // Make the call to the service to update the shelf for the selected book to the
    // newly selected shelf
    BooksAPI
      .update(book, shelf)
      .then(response => {
        // Update the state of the book. Start with a copy of the list of books.
        const newList = this
          .state
          .books
          .slice(0);
        // Book is a reference to the same object in both lists so just update the book
        // with the new shelf
        book.shelf = shelf;
        // Update the state with the newList
        this.setState({books: newList});
      })
  }

  render = () => {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={(() => (<Bookshelves
          books={this.state.books}
          onChangeShelf={this.changeShelf}
          onRefreshAllBooks={this.refreshAllBooks}/>))}/>

        <Route
          exact
          path='/search'
          render={(() => (<Search
          onChangeShelf={this.changeShelf}
          onRefreshAllBooks={this.refreshAllBooks}
          books={this.state.books}/>))}/>

      </div>
    )
  }
}

export default BooksApp
