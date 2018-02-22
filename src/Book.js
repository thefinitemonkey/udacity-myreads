import React, {Component} from 'react';

class Book extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            shelfSelection: this.props.shelfSelection || "none"
        }
    }

    onChangeShelf = (value) => {
        this.setState({shelfSelection: value});
    }

    render = () => {
        // Iterate over the array of authors to create a single author string
        let authors = '';
        if (this.props.bookAuthors) {
            this
                .props
                .bookAuthors
                .forEach(author => {
                    console.log(author);
                    authors += author + ' | ';
                });
        }
        // Delete the last three charaters from the authors string
        authors = authors.slice(0, authors.length - 3);

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.coverImage})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            value={this.state.shelfSelection}
                            onChange={(e) => this.onChangeShelf(e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.bookTitle}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book;