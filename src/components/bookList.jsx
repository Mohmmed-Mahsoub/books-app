import React, { useContext } from "react";
import { BooksContext } from "../contexts/booksContext";
import BookItem from "./bookItem";
const BookList = () => {
  const { books } = useContext(BooksContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookItem key={book.id} bookDitails={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books</div>
  );
};

export default BookList;
