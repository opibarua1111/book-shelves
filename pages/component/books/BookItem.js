import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { Button, Card, Col } from "react-bootstrap";
function BookItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
  }
  return (
    <Col xs={6}>
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button onClick={showDetailsHandler} variant="primary">
            show details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default BookItem;
