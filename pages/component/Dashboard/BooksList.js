import { Table } from "react-bootstrap";
import SingleBookList from "./SingleBookList";

export default function BooksList({ books, handleDeletebook }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <SingleBookList
            key={book.id}
            book={book}
            handleDeletebook={handleDeletebook}
          />
        ))}
      </tbody>
    </Table>
  );
}
