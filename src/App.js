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
    // Get the books currently on the bookshelves and update the state
    // with the returned list
    BooksAPI.getAll().then((list) => {
      this.setState({books: list});
    });
  }

  render = () => {
    return (
      <div className="app">
        <Route exact path='/' render={(() => (<Bookshelves books={this.state.books}/>))}/>

        <Route exact path='/search' render={(() => (<Search/>))}/>

      </div>
    )
  }
}

export default BooksApp
