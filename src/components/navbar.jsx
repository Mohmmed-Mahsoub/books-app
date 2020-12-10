import React, { useContext } from "react";
import { BooksContext } from "../contexts/booksContext";
import { ThemeContext } from "./../contexts/themeContext";

const Navbar = () => {
  const { books } = useContext(BooksContext);
  const { theme } = useContext(ThemeContext);
  const { isThemeLight, light, dark } = theme;
  const themeData = isThemeLight ? light : dark;
  return (
    <div className="navbar" style={{ background: themeData.ui }}>
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
