import { MongoClient, ObjectId } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const bookid = req.query.bookId;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db("booksPortal");
    const booksCollection = db.collection("books");
    const query = { _id: ObjectId(bookid) };
    const result = await booksCollection.deleteOne(query);
    client.close();
    res.status(201).json(result);
  } else if (req.method === "PUT") {
    const bookid = req.query.bookId;
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db("booksPortal");
    const booksCollection = db.collection("books");
    const query = { _id: ObjectId(bookid) };
    const options = { upsert: true };
    const updateDoc = { $set: data };
    const result = await booksCollection.updateOne(query, updateDoc, options);
    client.close();
    res.status(201).json(result);
  }
}
