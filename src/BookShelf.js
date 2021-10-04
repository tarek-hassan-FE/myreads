import React, { Component } from 'react';
import Book from './Book';
class BookShelf extends Component {
        
        render() {
                const { shelfTitle, books, chnageShelf} = this.props;
                
                return <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                        {books.map(book => {
                                return (<li key={book.id}>
                                        <Book   id={book.id}
                                                thumb={book.imageLinks.thumbnail}
                                                title={book.title}
                                                authors={book.authors}
                                                shelf={book.shelf}
                                                rate={book.averageRating}
                                                ratersCount={book.ratingsCount}
                                                onShelfChanged={(id , event) => chnageShelf(id , event)}
                                        />
                                </li>);
                        })}
                  </ol>
                </div>
              </div>;
        }
}
 
export default BookShelf;