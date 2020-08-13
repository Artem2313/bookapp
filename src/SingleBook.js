import React, { useContext } from "react";
import { Context } from "./Context";

const SingleBook = ({ title, id, completed }) => {
  const { toggleCheck, delBook } = useContext(Context);

  const checking = ["book"];

  if (completed) {
    checking.push("completed");
  }

  return (
    <li className={checking.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCheck(id)}
        />
        <span>{title}</span>
        <button
          type="button"
          className="waves-effect waves-light btn"
          onClick={() => delBook(id)}
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default SingleBook;
