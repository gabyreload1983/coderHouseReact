import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { id, pictureUrl, title, price, stock } = item;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body className="d-flex align-items-end">
        <Card.Title className="text-uppercase">{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Button as={Link} to={`/item/${id}`} variant="primary w-100">
          Ver detalle
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Item;
