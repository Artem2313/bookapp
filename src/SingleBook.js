import React, { useState } from "react";
//14) добавляем useState
//15) в зависимости от флага комплитед, отображать в чекбоксе стейт
const SingleBook = ({ title, id, completed }) => {
  //16) воспользуемся юз стейт, куда передадим флаг комплитед
  const [checked, setChecked] = useState(completed);
  //17) Теперь в зависимости от checked нам нужно будет добавлять или убирать класс с лишки
  const checking = ["book"];

  //18) проверяем checked данный класс описан в индекс цсс и добавляет line-through
  if (checked) {
    checking.push("completed");
  }
  return (
    //19) Добавляем этот класс через джоин и меняем дефолт на checked, добавляем onChange onChange={() => setChecked(!checked)
    <li className={checking.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>
        <button type="button" class="waves-effect waves-light btn">
          Delete
        </button>
      </label>
    </li>
  );
};

export default SingleBook;
