import React from "react";
const BookItem = (props) => {
  const { bookDitails } = props;
  return (
    <li>
      <div className="title">{bookDitails.title}</div>
      <div className="author">{bookDitails.author}</div>
    </li>
  );
};

export default BookItem;
