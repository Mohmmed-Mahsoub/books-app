import React, { useContext } from "react";
import Navbar from "./components/navbar";
import BookList from "./components/bookList";
import NewBookForm from "./components/newBookForm";
import BooksContextProvider from "./contexts/booksContext";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const { isThemeLight, light, dark } = theme;
  const themeData = isThemeLight ? light : dark;
  return (
    <div
      className="App"
      style={{ background: themeData.bg, color: themeData.textColor }}
    >
      <BooksContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
