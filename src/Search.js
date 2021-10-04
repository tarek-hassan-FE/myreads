import React, { Component } from 'react';

class Search extends Component {
        render() {
                const { clicked } = this.props;
                return <div className="search-books">
                <div className="search-books-bar">
                  <button className="close-search" onClick={clicked}>Close</button>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div>;
        }
}
 
export default Search;