import React from "react";

import { Button, FloatingLabel, Form } from "react-bootstrap";

function NewbookForm(props) {
  const [enteredName, seteEnteredName] = React.useState("");
  const [enteredDescription, setEnteredDesCription] = React.useState("");

  function submitHandler(e) {
    e.preventDefault();
    const bookData = {
      name: enteredName,
      description: enteredDescription,
    };
    props.onAddBook(bookData);
    document.getElementById("book-post").reset();
  }
  return (
    <div className="container">
      <div className="col-md-7">
        <form onSubmit={submitHandler} id="book-post">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="book name"
              onChange={(e) => seteEnteredName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              as="textarea"
              style={{ height: "100px" }}
              placeholder="description"
              onChange={(e) => setEnteredDesCription(e.target.value)}
            />
          </FloatingLabel>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
export default NewbookForm;
