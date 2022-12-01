import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({ item }) {
  const { pictureUrl, title, price, stock } = item;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body className="d-flex align-items-end">
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Button variant="primary w-100">Ver detalle</Button>
      </Card.Footer>
    </Card>
  );
}

export default Item;
