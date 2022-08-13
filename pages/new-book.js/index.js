import Head from "next/head";
import NewbookForm from "../component/books/NewBookForm";

function NewBookPage() {
  async function addBookHandler(enteredBookData) {
    const response = await fetch("/api/new-book", {
      method: "POST",
      body: JSON.stringify(enteredBookData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(enteredBookData);
    console.log(data);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Book shelves</title>
      </Head>

      <NewbookForm onAddBook={addBookHandler}></NewbookForm>
    </div>
  );
}
export default NewBookPage;
