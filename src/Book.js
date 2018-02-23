import React, {Component} from 'react';

class Book extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            shelfSelection: this.props.book.shelf || "none"
        }
    }

    onChangeShelf = (book, shelf) => {
        this.setState({shelfSelection: shelf});
        this.props.onChangeShelf(book, shelf);
    }

    render = () => {
        // Iterate over the array of authors to create a single author string
        let authors = '';
        if (this.props.book.authors) {
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
        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.smallThumbnail})`);

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: url
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            value={this.state.shelfSelection}
                            onChange={(e) => this.onChangeShelf(this.props.book, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book;