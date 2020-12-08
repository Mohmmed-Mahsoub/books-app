import Navbar from "./components/navbar";
import BookList from "./components/bookList";
import NewBookForm from "./components/newBookForm";
import BooksContextProvider from "./contexts/booksContext";

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
