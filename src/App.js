import React, { useState } from "react";
import BookList from "./BookList";

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

  // 6) Передаем books в компонент без this.state. Если посмотреть в браузер, то состояние не изменилось,
  //но мы теперь юзаем только функц. компонент

  const [books, setBooks] = useState([
    { id: 1, title: "Beauty and the Beast" },
    { id: 2, title: "Cinderella" },
    { id: 3, title: "The Little Mermaid" },
  ]);

  // 7) Сейчас мы добавим новый UseState для тайтла чтобы обработать инпут
  const [bookTitle, setBookTitle] = useState("");

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

  return (
    <div className="container">
      <h1>Bookapp</h1>
      <div className="input-field">
        {/* 7.1) Свяжем модель тайтла и инпута добавив value, а также добавим onKeyPress  случшатель, чтобы добавлять новый book по enter в массив
            8) onKeyPress реализуем как стрелочную функцию в Апп addBook    
            value={bookTitle}
            onChange={(event) => setBookTitle(event.target.value)}
            onKeyPress={addBook} 
        */}
        <input
          type="text"
          value={bookTitle}
          onChange={(event) => setBookTitle(event.target.value)}
          onKeyPress={addBook}
        />
        <label className="active">Book's Title</label>
      </div>
      {/* {передаем books вместо this.state.books} */}
      <BookList books={books} />
    </div>
  );
};

export default App;
