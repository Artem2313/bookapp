import React, { useContext } from "react";
//14) добавляем useState
//35) Добавляем контекст и useContext
import { Context } from "./Context";
//15) в зависимости от флага комплитед, отображать в чекбоксе стейт
const SingleBook = ({ title, id, completed }) => {
  //16) воспользуемся юз стейт, куда передадим флаг комплитед
  //40) Удаляем useState
  //   const [checked, setChecked] = useState(completed);

  //36) Добавляем useContext с объектом контекста которого мы хотим определить, в объекте те функции, которые мы передавали
  const { toggleCheck, delBook } = useContext(Context);
  //17) Теперь в зависимости от checked нам нужно будет добавлять или убирать класс с лишки
  const checking = ["book"];

  //18) проверяем checked данный класс описан в индекс цсс и добавляет line-through
  //   if (checked) {
  //     checking.push("completed");
  //   }

  //39) локальный стейт нам больше не нужен, поэтому мы заменим его, а будем брать флажек напрямую от родителя, в шаблоне тоже меняем checked на completed
  // Таким образом, у нас все сохраняется в локале, и мы можем все удалять
  if (completed) {
    checking.push("completed");
  }

  return (
    //19) Добавляем этот класс через джоин и меняем дефолт на checked, добавляем onChange onChange={() => setChecked(!checked)
    //20) Возвращаемся в Апп
    <li className={checking.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
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
