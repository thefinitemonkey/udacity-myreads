import React, {Component} from 'react';
import Book from './Book';

class Bookshelf extends Component {

    render = () => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book
                                bookTitle='To Kill a Mockingbird'
                                bookAuthor='Harper Lee'
                                shelfSelection="wantToRead"
                                backgroundImage='url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'/>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;