import React, { useState } from "react";
//14) добавляем useState

const SingleBook = ({ title, id, completed }) => {
  //15) в зависимости от флага комплитед, отображать в чекбоксе стейт
  const [checked, setChecked] = useState(completed);

  //16) воспользуемся юз стейт, куда передадим флаг комплитед

  //17) Теперь в зависимости от checked нам нужно будет добавлять или убирать класс с лишки
  const checking = ["book"];

  //18) проверяем checked данный класс описан в индекс цсс и добавляет line-through
  if (checked) {
    checking.push("completed");
  }

  return (
    //19) Добавляем этот класс через джоин и меняем дефолт на checked, добавляем onChange onChange={() => setChecked(!checked)
    // checked={completed} вместо default
    //19.1) добавим onChange, куда инвертируем событие setChecked(!checked)}
    //   onChange={() => setChecked(!checked)}
    //20) Возвращаемся в Апп, на этом работа с useState закончена
    <li className={checking.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>
        <button type="button" className="waves-effect waves-light btn">
          Delete
        </button>
      </label>
    </li>
  );
};

export default SingleBook;
