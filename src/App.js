import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks => this.setState({
        books: allBooks
      }));
  }

  handleChangeShelf(id, event) {
    let newShelf = event.target.value;
    let newBooks = [...this.state.books];

    newBooks.forEach(book => {
      if (book.id === id) {
        book.shelf = newShelf;
      }
    })
    
    this.setState({
      books: [...newBooks],
    })

  }

  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookShelf
                    shelfTitle= "Currently Reading"
                    books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                    chnageShelf={(id , event)=> this.handleChangeShelf(id , event)} />
                  
                  <BookShelf
                    shelfTitle="Want to read"
                    books={this.state.books.filter(book => book.shelf === "wantToRead")}
                    chnageShelf={(id , event)=> this.handleChangeShelf(id , event)}/>
                  
                  <BookShelf
                    shelfTitle="Read"
                    books={this.state.books.filter(book => book.shelf === "read")}
                    chnageShelf={(id , event)=> this.handleChangeShelf(id , event)} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
