import React from "react";
import BookItem from "./bookItem";
const BookList = () => {
  return (
    <div className="book-list">
      <ul>
        <BookItem />
      </ul>
    </div>
  );
};

export default BookList;
