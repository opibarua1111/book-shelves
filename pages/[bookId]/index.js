import { MongoClient, ObjectId } from "mongodb";
import BookDetails from "../component/books/BookDetails";
function bookDetails(props) {
  return (
    <BookDetails
      name={props.bookData.name}
      description={props.bookData.description}
    />
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db("booksPortal");
  const booksCollection = db.collection("books");
  const books = await booksCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: books.map((book) => ({
      params: { bookId: book._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const bookid = context.params.bookId;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db("booksPortal");
  const booksCollection = db.collection("books");
  const query = { _id: ObjectId(bookid) };
  const selectedBooks = await booksCollection.findOne(query);

  client.close();
  return {
    props: {
      bookData: {
        id: selectedBooks._id.toString(),
        name: selectedBooks.name,
        description: selectedBooks.description,
      },
    },
  };
}
export default bookDetails;
