import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';


class Bookshelves extends Component {

    state = {
        shelves: {
            current: {name: "Currently Reading", books: []},
            want: {name: "Want to Read", books: []},
            read: {name: "Read", books: []}
        }
    }


    render = () => {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Bookshelf shelf={this.state.shelves.current}/>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookshelves;