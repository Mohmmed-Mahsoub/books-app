import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localStorageData = localStorage.getItem("books");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    //console.log(localStorage.getItem("books"));
  }, [books]);
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
