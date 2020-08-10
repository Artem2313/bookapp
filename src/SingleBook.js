import React from "react";
const SingleBook = ({ title, id, finished }) => (
  <li className="book">
    <label>
      <input type="checkbox" defaultChecked={false} />
      <span>{title}</span>
      <button type="button" class="waves-effect waves-light btn">
        Delete
      </button>
    </label>
  </li>
);

export default SingleBook;
