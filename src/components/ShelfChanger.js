const ShelfChanger = ({ book, updateShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(event) => updateShelf(book, event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
