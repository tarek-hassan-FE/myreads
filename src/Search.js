import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book';
class Search extends Component {

        /**
         * @description Checks if a givin book already on one of the shelves and returs it's shelf or none
         * @constructor
         * @param {array} books - The books already have a shelf 
         * @param {string} id - The id of the book we want to check
         */
        checkShelf(books , id) {
                books = books.filter(book => book.id === id);
                return books.length > 0 ? books[0]["shelf"] : "none";
        }

        render() {
                const { queryBooks, matchedBooks, chnageShelf, books } = this.props;

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
                                                  shelf={this.checkShelf(books, book.id)}
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