import React, { Component } from 'react';
import Book from './Book';
class BookShelf extends Component {
        
        render() {
                const { title, books } = this.props;
                
                return <div className="bookshelf">
                        <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                        {books.map(book => {
                                return (<li key={book.id}>
                                        <Book thumb={book.imageLinks.thumbnail}
                                                title={book.title}
                                                authors={book.authors}
                                        />
                                </li>);
                        })}
                  </ol>
                </div>
              </div>;
        }
}
 
export default BookShelf;