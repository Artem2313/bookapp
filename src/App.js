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

  // 30) Создадим две функции, одна в ответе за удаление книги
  const delBook = (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };
  //31) вторая в ответе за состояние checked

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

  //32) передаем эти две функции в провайдер Context.Provider value={{ toggleCheck, delBook }}
  //33) перейдем в SingleBook, чтобы получить эти функции

  return (
    // 28) Оборачиваем весь шаблон в провайдер контекста <Context.Provider>
    //29) передаем значение value, которые будут содержать в себе функции для изменения главного стейт value={{}}
    //29.1) Получаем контекст в SingleBook,будущие функции тоггле и удаления

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
