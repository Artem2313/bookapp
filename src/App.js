import React, { useState } from "react";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Beauty and the Beast" },
    { id: 2, title: "Cinderella" },
    { id: 3, title: "The Little Mermaid" },
  ]);

  const [bookTitle, setBookTitle] = useState("");

  const addBook = (event) => {
    if (event.key === "Enter") {
      setBooks([
        ...books,
        { id: Date.now(), title: bookTitle, completed: false },
      ]);

      setBookTitle("");
    }
  };

  return (
    <div className="container">
      <h1>Bookapp</h1>
      <div className="input-field">
        <input
          type="text"
          value={bookTitle}
          onChange={(event) => setBookTitle(event.target.value)}
          onKeyPress={addBook}
        />
        <label className="active">Book's Title</label>
      </div>

      <BookList books={books} />
    </div>
  );
};

export default App;
