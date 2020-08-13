import React, { useContext } from "react";
import { Context } from "./Context";

const SingleBook = ({ title, id, completed }) => {
  // const { toggleCheck, delBook } = useContext(Context);
  //54) Заменяем const { toggleCheck, delBook } = useContext(Context); на const { dispatch } = useContext(Context);
  const { dispatch } = useContext(Context);

  const checking = ["book"];

  if (completed) {
    checking.push("completed");
  }

  return (
    <li className={checking.join(" ")}>
      <label>
        {/* 55) заменяем  toggleCheck(id) на диспатч*/}
        <input
          type="checkbox"
          checked={completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id,
            })
          }
        />
        <span>{title}</span>
        {/* 56) заменяем  delBook(id) на диспатч и переходим в редьюсер чтобы обработать эти экшены*/}
        <button
          type="button"
          className="waves-effect waves-light btn"
          onClick={() =>
            dispatch({
              type: "delete",
              payload: id,
            })
          }
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default SingleBook;
