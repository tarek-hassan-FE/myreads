import React, { Component } from 'react';

class Book extends Component {
        render() { 
                return <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{width: 140 , height: 200, backgroundImage: `url('${this.props.thumb}' )`}}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                        <div className="book-title">{this.props.title}</div>
                        <div className="book-authors">{this.props.authors.join(", ")}</div>
                </div>
                ;
        }
}
 
export default Book;