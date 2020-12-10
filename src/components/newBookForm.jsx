import React, { useState, useContext } from "react";
import { BooksContext } from "../contexts/booksContext";
import { ThemeContext } from "./../contexts/themeContext";
const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BooksContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_book", bookPayload: { title, author } });
    setTitle("");
    setAuthor("");
  };
  const { theme } = useContext(ThemeContext);
  const { isThemeLight, light, dark } = theme;
  const themeData = isThemeLight ? light : dark;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="book title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ background: themeData.ui, color: themeData.textColor }}
      />
      <input
        type="text"
        value={author}
        placeholder="author name"
        onChange={(e) => setAuthor(e.target.value)}
        style={{ background: themeData.ui, color: themeData.textColor }}
      />
      <input
        type="submit"
        value="add book"
        style={{ background: themeData.ui, color: themeData.textColor }}
      />
    </form>
  );
};

export default NewBookForm;
