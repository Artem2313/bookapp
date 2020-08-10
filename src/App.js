import React, { useState, useEffect } from "react";
import BookList from "./BookList";

// 27) Передаем контекст
import { Context } from "./Context";

/*
1) Заменить Апп на конст Апп, а также убрать наследование от компонента
2) Удалим компонент и исправим сам Апп

*/

const App = () => {
  // 3) Комментим стейт и убираем рендер, а оставляем ретерн с шаблоном jsx
  // state = {
  //   books: [
  //     { id: 1, title: "Beauty and the Beast" },
  //     { id: 2, title: "Cinderella" },
  //     { id: 3, title: "The Little Mermaid" },
  //   ],
  // };

  // 4) Импортируем первый хук из реакта useState
  // 5) Usestate позволяет работать в функциональных компонентах со стейтом. Результат функции Usestate это массив из двух элементов
  // где первый элемент это само начальное состояние, а второй элемент - это функция для изменения состояния
  // передаем начальное состояние books, как было в стейте
  // 6) Передаем books в компонент без this.state. Если посмотреть в браузер, то состояние не изменилось, но мы теперь юзаем только функц. компонент

  const [books, setBooks] = useState([
    //21) Поработаем немного с UseEffect, а именно с localstorage - уберем локальный стейт
    // { id: 1, title: "Beauty and the Beast" },
    // { id: 2, title: "Cinderella" },
    // { id: 3, title: "The Little Mermaid" },
  ]);

  // 7) Сейчас мы добавим новый UseState для тайтла чтобы обработать инпут
  const [bookTitle, setBookTitle] = useState("");

  // 22) UseEffect (добавим как реакт компонент), благодаря этому хуку - мы можем реализовывать life cycle хуки в функциональных компонентах
  // Он принимает в себя в первый аргумент callback, который будет выполняться, а вторым параметром передается список зависимостей, на
  // которые откликается UseEffect

  // 24) Добавим еще один UseEffect для отображения при перегрузке элементов, он будет срабатывать один раз при загрузке
  // Заберем от туда books или вернем пустой массив в стейт books
  // Таким образом у нас происходит сохранение массива книг, но состояние отдельной книги - не сохраняется (checked)
  // Это связанно с тем, что мы изменяем локальный стейт в SingleBook, который никак не влияет на массив books
  // Это можно исправить с помощью UseContext! Создаем новый файл в корне Context, где и определим Context.

  useEffect(() => {
    const arr = localStorage.getItem("books") || [];
    setBooks(JSON.parse(arr));
  }, []);
  useEffect(
    () => {
      //23) зададим локал сторадж с зависимостью массива books и обернем его в джейсон
      // но стоит учесть, что сейчас в локал сторидж ничего не сохраниться при перегрузке
      localStorage.setItem("books", JSON.stringify(books));
      //для начала консоль логнем и проверим, когда вызывается? По-факту, он реализовывается на каждое изменение состояния
    },
    // Теперь добавим зависимость, к примеру, пустой массив. Так мы сможем сэмулировать componentDidMount. Тоесть, у нас будет один консоль лог, который не повторяется
    // Если в массив зависимостей мы передадим какую-то часть стейта, то на каждое ее изменение будет вызываться и UseEffect
    // например, добавим bookTitle в зависимости, и посмотрим, что будет выводить консоль лог

    [books]
  );

  // 9) Реализовываем функц addBook
  const addBook = (event) => {
    //10) Проверим нажимали ли мы Энтер
    if (event.key === "Enter") {
      //11) Реализовываем добавление setBooks, спредаем старый массив и добавляем новую книгу
      setBooks([
        ...books,
        { id: Date.now(), title: bookTitle, completed: false },
      ]);
      //12) Для очистки тайтла - вызываем сет стейт с пустой строкой
      setBookTitle("");
      //13) Для того, чтобы отрисовать прочтение или непрочтение книги - перейдем в SingleBook
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

  //32) передаем эти две функции в провайдер

  return (
    // 28) Оборачиваем весь шаблон в провайдер контекста <Context.Provider>
    //29) передаем значение value, которые будут содержать в себе функции для изменения главного стейт value={{}}
    //33) Получаем контекст в SingleBook
    <Context.Provider value={{ toggleCheck, delBook }}>
      <div className="container">
        <h1>Bookapp</h1>
        <div className="input-field">
          {/* 7) Свяжем модель тайтла и инпута добавив value, а также добавим onKeyPress  случшатель, чтобы добавлять новый book по enter в массив
            8) onKeyPress реализуем как стрелочную функцию в Апп addBook     
        */}
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
