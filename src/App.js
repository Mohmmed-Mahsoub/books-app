import Navbar from "./components/navbar";
import BookList from "./components/bookList";
import NewBookForm from "./components/newBookForm";
import BooksContextProvider from "./contexts/booksContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BooksContextProvider>
        <BookList />
        <NewBookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
