import React, { useState, useEffect } from "react";
//21.1) { useState, useEffect } from "react";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([
    //21) Поработаем немного с UseEffect, а именно с localstorage - уберем локальный стейт
    // { id: 1, title: "Beauty and the Beast" },
    // { id: 2, title: "Cinderella" },
    // { id: 3, title: "The Little Mermaid" },
  ]);

  const [bookTitle, setBookTitle] = useState("");

  // 24) Добавим еще один UseEffect для отображения при перегрузке элементов, он будет срабатывать один раз при загрузке
  // Заберем от туда books или вернем пустой массив в стейт books

  useEffect(() => {
    const arr = localStorage.getItem("books") || [];
    setBooks(JSON.parse(arr));
  }, []);

  // 22) UseEffect (добавим как реакт компонент), благодаря этому хуку - мы можем реализовывать life cycle хуки в функциональных компонентах
  // Он принимает в себя в первый аргумент callback, который будет выполняться, а вторым параметром передается список зависимостей, на
  // которые откликается UseEffect
  // добавим консоль лог, чтобы посмотреть в целом, когда он меняется, а меняться он будет на каждое изменение от ввода в тайтл, до добавления книги
  useEffect(
    () => {
      // console.log("init");
      //23) зададим локал сторадж с зависимостью массива books и обернем его в джейсон
      // но стоит учесть, что сейчас в локал сторидж ничего не сохраниться при перегрузке
      localStorage.setItem("books", JSON.stringify(books));
      //для начала консоль логнем и проверим, когда вызывается? По-факту, он реализовывается на каждое изменение состояния
    },
    //22.1) Добавим зависимость, теперь инит вызовется только при загрузке, т.к. нет зависимостей, таким образом
    // делается эмуляция componentDidMount
    // Теперь добавим зависимость, к примеру, пустой массив. Так мы сможем сэмулировать componentDidMount. Тоесть, у нас будет один консоль лог, который не повторяется
    // Если в массив зависимостей мы передадим какую-то часть стейта, то на каждое ее изменение будет вызываться и UseEffect
    // сейчас добавим books, т.к. мы будем работать с ними в локал сторидж в зависимости, и посмотрим, что будет выводить консоль лог

    [books]
  );

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
