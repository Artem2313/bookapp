import React, { useState } from "react";

const SingleBook = ({ title, id, completed }) => {
  const [checked, setChecked] = useState(completed);

  const checking = ["book"];

  if (checked) {
    checking.push("completed");
  }

  return (
    <li className="book">
      <label>
        <input
          type="checkbox"
          checked={completed}
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
