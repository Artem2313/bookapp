import React from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <SingleBook key={book.id} {...book} />
    ))}
  </ul>
);

export default BookList;
