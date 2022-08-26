import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
const axios = require("axios");

export default function BookListModal({
  book,
  openBookList,
  handleBookListClose,
}) {
  const { name, description, id } = book;
  const [newName, setNewName] = React.useState("");
  const [newDescription, setNewDes] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const updateName = newName ? newName : name;
  const updateDes = newDescription ? newDescription : description;

  const updateHandler = (e) => {
    e.preventDefault();
    const updateInfo = {
      name: updateName,
      description: updateDes,
    };
    axios
      .put(`/api/book/${id}`, updateInfo)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal
      show={openBookList}
      onHide={handleBookListClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              {success && (
                <Alert variant="success">Book updated successfully</Alert>
              )}
              <form onSubmit={updateHandler}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Title"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    onChange={(e) => setNewName(e.target.value)}
                  >
                    {name}
                  </Form.Control>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Write description"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    onChange={(e) => setNewDes(e.target.value)}
                    style={{ height: "100px" }}
                  >
                    {description}
                  </Form.Control>
                </FloatingLabel>
                <Modal.Footer>
                  <Button type="submit">Update</Button>
                </Modal.Footer>
              </form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
