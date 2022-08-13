import { MongoClient } from "mongodb";

async function handler(req, res) {
  // const { method } = req.method;
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xbjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db("booksPortal");
    const booksCollection = db.collection("books");
    const result = await booksCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "book inserted!" });
  }
}
export default handler;
