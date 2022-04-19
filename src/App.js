import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

function App() {
  const updateShelf = (updatedBook, shelf) => {
    BooksAPI.update({ id: updatedBook.id }, shelf);
    if (shelf === "none") {
      setBooks(books.filter((book) => book.id !== updatedBook.id));
    }
    if (books.filter((book) => book.id === updatedBook.id).length === 0) {
      setBooks(books.concat({ ...updatedBook, shelf }));
    } else {
      setBooks(
        books.map((book) =>
          book.id === updatedBook.id ? { ...book, shelf } : book
        )
      );
    }
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res);
    };

    getBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<ListBooks books={books} updateShelf={updateShelf} />}
        />
        <Route
          path="/search"
          element={<SearchBooks myBooks={books} updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
