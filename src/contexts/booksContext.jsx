import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
    { title: "title3", author: "author3", id: 3 },
  ]);
  return (
    <BooksContext.Provider value={{ books }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
