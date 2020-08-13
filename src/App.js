import React, { useState, useEffect } from "react";
import BookList from "./BookList";

// 27) Передаем контекст
import { Context } from "./Context";

const App = () => {
  const [books, setBooks] = useState([]);

  const [bookTitle, setBookTitle] = useState("");

  useEffect(() => {
    const arr = localStorage.getItem("books") || [];
    setBooks(JSON.parse(arr));
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (event) => {
    if (event.key === "Enter") {
      setBooks([
        ...books,
        { id: Date.now(), title: bookTitle, completed: false },
      ]);

      setBookTitle("");
    }
  };

  const delBook = (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };

  const toggleCheck = (id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          book.completed = !book.completed;
        }
        return book;
      })
    );
  };

  return (
    <Context.Provider value={{ toggleCheck, delBook }}>
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
    </Context.Provider>
  );
};

export default App;
