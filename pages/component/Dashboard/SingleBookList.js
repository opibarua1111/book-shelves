import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BookListModal from "../books/BookListModal";

export default function SingleBookList({ book, handleDeletebook }) {
  const [openBookList, setBookListOpen] = React.useState(false);
  const handleBookListOpen = () => setBookListOpen(true);
  const handleBookListClose = () => setBookListOpen(false);
  return (
    <>
      <tr>
        <td>{book.name}</td>
        <td>{book.description}</td>
        <td>
          <a onClick={handleBookListOpen}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </a>
          <a
            className="delete_post ms-3"
            onClick={() => handleDeletebook(book.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </a>
        </td>
      </tr>
      <BookListModal
        book={book}
        openBookList={openBookList}
        handleBookListClose={handleBookListClose}
      />
    </>
  );
}
