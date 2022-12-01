import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const { pictureUrl, title, price, description, stock } = item;

  const handleAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos al carrito`);
  };

  return (
    <Card style={{ width: "20rem" }} className="ms-auto me-auto mt-3">
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
      </Card.Body>
      <Card.Footer>
        <Card.Text>Stock: {stock}</Card.Text>
        <Button className="w-100">Regresar</Button>
      </Card.Footer>
    </Card>
  );
}

export default ItemDetail;
