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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={(() => (<Bookshelves/>))}/>

        <Route exact path='/search' render={(() => (<Search/>))}/>

      </div>
    )
  }
}

export default BooksApp
