import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book';
class Search extends Component {
        
        render() {
                const { queryBooks, matchedBooks, chnageShelf } = this.props;

                return <div className="search-books">
                <div className="search-books-bar">
                        <Link to="/">
                                <button className="close-search">Close</button>
                        </Link>
                  <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        onChange={(event) => queryBooks(event)} />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                          {
                                matchedBooks.length > 0 ? matchedBooks.map(book =>{ 
                                  return (<li key={book.id}>
                                        <Book   id={book.id}
                                                thumb={book.imageLinks ? book.imageLinks.thumbnail: ""}
                                                title={book.title}
                                                authors={book.authors ? book.authors : [""]}
                                                  shelf={book.shelf}
                                                  onShelfChanged={(id , event) => chnageShelf(id , event)}
                                        />
                                        </li>);
                                }): "No Books Found"
                          }
                  </ol>
                </div>
              </div>;
        }
}
 
export default Search;