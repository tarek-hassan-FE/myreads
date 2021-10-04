import React, { Component } from 'react';
import Rate from './Rate';
class Book extends Component {
        render() {
                const {id, shelf, thumb, title, authors, onShelfChanged, rate, ratersCount } = this.props;
                return <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{width: 140 , height: 200, backgroundImage: `url('${thumb}' )`}}></div>
                  <div className="book-shelf-changer">
                    <select onChange={(event) => onShelfChanged(id,event)} value={shelf} >
                      <option value="move" disabled >Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors.join(", ")}</div>
                        <div className="book-rate-container">
                          <div className="book-rate"> <Rate value ={rate}/> </div>
                          <div className="book-raters-counter">{ratersCount ? "("+ ratersCount + ")" : ""}</div>
                        </div>
                </div>
                ;
        }
}
 
export default Book;