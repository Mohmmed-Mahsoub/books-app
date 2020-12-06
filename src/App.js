import Navbar from "./components/navbar";
import BookList from "./components/bookList";
import NewBookForm from "./components/newBookForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <NewBookForm />
    </div>
  );
}

export default App;
