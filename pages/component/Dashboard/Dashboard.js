import BooksList from "./BooksList";

function Dashboard({ books, handleDeletebook }) {
  return <BooksList books={books} handleDeletebook={handleDeletebook} />;
}

export default Dashboard;
