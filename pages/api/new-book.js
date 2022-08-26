import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // const { method } = req.method;
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db("booksPortal");
    const booksCollection = db.collection("books");
    const result = await booksCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "book inserted!" });
  }
}
