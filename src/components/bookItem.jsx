import React, { useContext } from "react";
import { BooksContext } from "../contexts/booksContext";
const BookItem = (props) => {
  const { dispatch } = useContext(BooksContext);
  const { bookDitails } = props;

  return (
    <li onClick={() => dispatch({ type: "DEL_BOOK", id: bookDitails.id })}>
      <div className="title">{bookDitails.title}</div>
      <div className="author">{bookDitails.author}</div>
    </li>
  );
};

export default BookItem;
