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
                        <select value={this.state.shelfSelection} onChange={(e) => this.onChangeShelf(e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.bookTitle}</div>
                <div className="book-authors">{this.props.bookAuthor}</div>
            </div>
        )
    }
}

export default Book;