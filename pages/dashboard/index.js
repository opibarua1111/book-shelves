import { MongoClient } from "mongodb";
import React, { useEffect, useState } from "react";
import Dashboard from "../component/Dashboard/Dashboard";
export default function Dashboards(props) {
  const [presentBook, setPresentBook] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    setPresentBook(props.books);
  }, [reload]);
  const handleDeletebook = async (id) => {
    const proceed = window.confirm("Are you sure, You want to delete");
    if (proceed) {
      const url = `/api/book/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response
        .json()
        // console.log(data);
        // .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted book sucessfully");
            console.log(id);
            const remainingbooks = presentBook.filter((book) => book.id !== id);
            console.log(remainingbooks);
            setReload(true);
            setPresentBook(remainingbooks);
          }
        });
    }
  };
  return <Dashboard books={presentBook} handleDeletebook={handleDeletebook} />;
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
