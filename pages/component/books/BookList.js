import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import BookItem from "./BookItem";

function BookList(props) {
  return (
    <Row>
      {/* {props.books.map((book) => console.log(book.description))} */}
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          name={book.name}
          description={book.description}
        />
      ))}
    </Row>
  );
}
export default BookList;
