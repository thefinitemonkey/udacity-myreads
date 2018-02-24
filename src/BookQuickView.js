import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import BookshelfChanger from './BookshelfChanger';

class BookQuickView extends Component {

    state = {
        shelfSelection: this.props.book.shelf || "none",
        isShowingModal: false,
        book: this.props.book
    }

    componentWillReceiveProps = (props) => {
        this.props = props;
        this.setState({
            isShowingModal: props.showModal,
            book: props.book,
            shelfSelection: this.props.book.shelf || "none"
        });
    }

    handleClose = () => {
        this.setState({isShowingModal: false, book: {}});
        this
            .props
            .onCloseModal();
    }

    buildAuthors = () => {
        const authors = this.props.book.authors;

        // Make sure the authors is an array
        if (!Array.isArray(authors)) 
            return null;
        // Build out the list of authors for display
        return (
            <ol>
                {authors.map(author => (
                    <li key={author}>{author}</li>
                ))}
            </ol>
        )
    }

    render = () => {
        // Create thumbnail url
        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

        return (
            <div>
                {this.state.isShowingModal && <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <div className="book-quick-view">
                            <div className="book-title">
                                <h2>{this.props.book.title}</h2>
                            </div>
                            <div className="book-quick-view-details">
                                <div className="book-left">
                                    <div
                                        className="book-cover"
                                        style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: url
                                    }}></div>
                                </div>
                                <div className="book-right">
                                    {this.props.book.authors.length === 1 && <h3>Author</h3>}
                                    {this.props.book.authors.length > 1 && <h3>Authors</h3>}
                                    <div className="book-authors">{this.buildAuthors()}</div>
                                    <div className="book-pages">{this.props.book.pageCount && <span>{this.props.book.pageCount}&nbsp; pages</span>}</div>
                                    <div className="book-info-link">
                                        {this.props.book.infoLink && <a href={this.props.book.infoLink} target="_blank">See more details</a>}
                                    </div>
                                    <BookshelfChanger book={this.props.book} onChangeShelf={this.props.onChangeShelf} />
                                </div>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer>}
            </div>
        )
    }
}

export default BookQuickView;