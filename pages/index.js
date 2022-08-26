import { MongoClient } from "mongodb";

import BookList from "./component/books/BookList";

export default function Home(props) {
  return <BookList books={props.books} />;
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db("booksPortal");
  const booksCollection = db.collection("books");
  const books = await booksCollection.find().toArray();
  client.close();
  return {
    props: {
      books: books.map((book) => ({
        id: book._id.toString(),
        name: book.name,
        description: book.description,
      })),
    },
    revalidate: 1,
  };
}
