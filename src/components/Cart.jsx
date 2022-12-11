import React from "react";
import { useContext } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { CartContext } from "../context/CartContext";

function Cart(props) {
  const { cartList, removeItem, clear } = useContext(CartContext);

  return (
    <Container>
      <h1>MI CARRITO</h1>
      {cartList.length !== 0 && (
        <Button className="mb-4" variant="outline-danger" onClick={clear}>
          Vaciar carrito
        </Button>
      )}
      {cartList.length ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>CANTIDAD</th>
              <th>DESCRIPCION</th>
              <th>PRECIO</th>
              <th>QUITAR</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item) => (
              <tr key={item.id}>
                <td>{item.quantity}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <Button onClick={() => removeItem(item.id)}>X</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Carrito vacio</p>
      )}
    </Container>
  );
}

export default Cart;
