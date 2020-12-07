import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
