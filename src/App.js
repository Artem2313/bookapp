import React, { useState, useEffect, useReducer } from "react";
import BookList from "./BookList";
//42) Импортируем редьюсер
import reducer from "./reducer";

// 27) Передаем контекст
import { Context } from "./Context";

const App = () => {
  //43) вызовем хук useReducer, где в первый компонент передадим наш редьюсер, а во второй начальный стейт
  // хук useReducer возвращает один параметр, который представлен в виде массива, где первый эл state, а его можно менять с помощью втор эл. dispatch
  // const [state, dispatch] = useReducer(reducer, []);

  //45) Заберем начальное состояние из локал сторидж
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("books"))
  );

  // 44) Если мы используем редьюсер, то useState уже не нужен, удалим его
  // const [books, setBooks] = useState([]);

  const [bookTitle, setBookTitle] = useState("");

  //46) Нужно убрать один из useEffect
  // useEffect(() => {
  //   const arr = localStorage.getItem("books") || [];
  //   setBooks(JSON.parse(arr));
  // }, []);

  //47) Изменим второй useEffect, чтобы он принимал стейт
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state));
  }, [state]);

  //48) заменим все books на стейт
  const addBook = (event) => {
    if (event.key === "Enter") {
      //50) добавим диспатч в добавление
      dispatch({
        type: "add",
        payload: bookTitle,
      });

      // setBooks([
      //   ...state,
      //   { id: Date.now(), title: bookTitle, completed: false },
      // ]);

      setBookTitle("");
    }
  };

  //49) Закомментим удаление и тоггле, и заменим их на диспатч

  // const delBook = (id) => {
  //   setBooks(
  // books.filter((book) => {
  //   return book.id !== id;
  // })
  // );
  // };

  // const toggleCheck = (id) => {
  //   setBooks(
  // books.map((book) => {
  //   if (book.id === id) {
  //     book.completed = !book.completed;
  //   }
  //   return book;
  // })
  //   );
  // };

  return (
    //53) Заменим value={{ toggleCheck, delBook } на value={{ dispatch }}
    <Context.Provider value={{ dispatch }}>
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
        {/* 52) Заменим books на state */}
        <BookList books={state} />
      </div>
    </Context.Provider>
  );
};

export default App;
