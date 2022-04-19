import ShelfChanger from "./ShelfChanger";

const Book = ({ book, updateShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks ? (
            <div
              className="book-cover"
              style={{
                width: 140,
                height: 200,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ) : (
            <div
              className="book-cover"
              style={{
                width: 140,
                height: 200,
                backgroundImage: `url(https://via.placeholder.com/128x193?text=No%20Cover)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          )}

          <ShelfChanger book={book} updateShelf={updateShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && (
          <div className="book-authors">{book.authors.join(", ")}</div>
        )}
      </div>
    </li>
  );
};

export default Book;
