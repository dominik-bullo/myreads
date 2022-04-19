import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const ListBooks = ({ books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            shelf="currentlyReading"
            books={books}
            updateShelf={updateShelf}
          />

          <BookShelf
            title="Want to Read"
            shelf="wantToRead"
            books={books}
            updateShelf={updateShelf}
          />

          <BookShelf
            title="Read"
            shelf="read"
            books={books}
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
