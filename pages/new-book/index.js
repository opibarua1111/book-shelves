import Head from "next/head";
import { useRouter } from "next/router";
import NewbookForm from "../component/books/NewBookForm";

function NewBookPage() {
  const router = useRouter();
  async function addBookHandler(enteredBookData) {
    const response = await fetch("/api/new-book", {
      method: "POST",
      body: JSON.stringify(enteredBookData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <div>
      <Head>
        <title>Book shelves</title>
      </Head>

      <NewbookForm onAddBook={addBookHandler}></NewbookForm>
    </div>
  );
}
export default NewBookPage;
