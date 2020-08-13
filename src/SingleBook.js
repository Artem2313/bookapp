import React, { useContext } from "react";
//34) Убираем useState, больше он нам в этом компоненте не нужен
//35) Добавляем контекст и useContext
import { Context } from "./Context";

const SingleBook = ({ title, id, completed }) => {
  //40) Удаляем useState
  //   const [checked, setChecked] = useState(completed);

  //36) Добавляем useContext с объектом контекста которого мы хотим определить, в объекте те функции, которые мы передавали
  const { toggleCheck, delBook } = useContext(Context);

  const checking = ["book"];

  // if (checked) {
  //   checking.push("completed");
  // }

  //39) локальный стейт нам больше не нужен, поэтому мы заменим его, а будем брать флажек напрямую от родителя, в шаблоне тоже меняем checked на completed
  // Таким образом, у нас все сохраняется в локале, и мы можем все удалять
  if (completed) {
    checking.push("completed");
  }

  return (
    <li className={checking.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          // checked={checked}
          //   onChange={() => setChecked(!checked)}
          //37) вызовем функцию в onChange
          onChange={() => toggleCheck(id)}
        />
        <span>{title}</span>
        <button
          type="button"
          className="waves-effect waves-light btn"
          //38) добавим удаление
          onClick={() => delBook(id)}
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default SingleBook;
