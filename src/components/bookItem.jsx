import React, { useContext } from "react";
import { BooksContext } from "../contexts/booksContext";
import { ThemeContext } from "./../contexts/themeContext";
const BookItem = (props) => {
  const { dispatch } = useContext(BooksContext);
  const { bookDitails } = props;
  const { theme } = useContext(ThemeContext);
  const { isThemeLight, light, dark } = theme;
  const themeData = isThemeLight ? light : dark;
  return (
    <li
      style={{ background: themeData.ui, color: themeData.textColor }}
      onClick={() => dispatch({ type: "DEL_BOOK", id: bookDitails.id })}
    >
      <div className="title" style={{ color: themeData.textColor }}>
        {bookDitails.title}
      </div>
      <div className="author" style={{ color: themeData.textColor }}>
        {bookDitails.author}
      </div>
    </li>
  );
};

export default BookItem;
