import Book from "./Book";

const BookShelf = ({ title, shelf, books, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf)
            .map((book) => (
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
