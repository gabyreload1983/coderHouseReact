import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { BarLoader } from "react-spinners";

function ItemDetail({ item }) {
  const { pictureUrl, title, price, description, stock } = item;
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (quantity) => {
    setQuantity(quantity);
  };

  console.log(quantity);

  return (
    <>
      {!pictureUrl ? (
        <BarLoader width="100%" color="#36d7b7" />
      ) : (
        <Card style={{ width: "20rem" }} className="ms-auto me-auto mt-3">
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            {!quantity && (
              <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
            )}
          </Card.Body>
          <Card.Footer>
            <Card.Text>Stock: {stock}</Card.Text>
            <Button className="w-100">Regresar</Button>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}

export default ItemDetail;
