import React, { Component } from "react";
import BookList from "./BookList";

export default class App extends Component {
  state = {
    books: [
      { id: 1, title: "Beauty and the Beast" },
      { id: 2, title: "Cinderella" },
      { id: 3, title: "The Little Mermaid" },
    ],
  };
  render() {
    return (
      <div className="container">
        <h1>Bookapp</h1>
        <div className="input-container">
          <input type="text" />
          <label>Book's Title</label>
        </div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}
