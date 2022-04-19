import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const SearchBooks = ({ myBooks, updateShelf }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const updateQuery = (query) => setQuery(query);

  useEffect(() => {
    const search = async () => {
      if (query === "") {
        setResults([]);
      } else {
        const res = await BooksAPI.search(query);
        if (!res.error) {
          setResults(res);
        } else {
          setResults([]);
        }
      }
    };

    search();
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results !== [] &&
            results.map((book) => {
              if (
                myBooks.filter((myBook) => myBook.id === book.id).length === 0
              ) {
                return (
                  <Book
                    key={book.id}
                    book={{ ...book, shelf: "none" }}
                    updateShelf={updateShelf}
                  />
                );
              } else {
                return (
                  <Book
                    key={book.id}
                    book={myBooks.filter((myBook) => myBook.id === book.id)[0]}
                    updateShelf={updateShelf}
                  />
                );
              }
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
