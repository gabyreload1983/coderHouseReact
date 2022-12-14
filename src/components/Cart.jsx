import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { CartContext } from "../context/CartContext";

function Cart(props) {
  const { cartList, removeItem, clear, calcSubtotal, calcTotal } =
    useContext(CartContext);

  return (
    <Container className="mt-2">
      <h1>MI CARRITO</h1>
      {cartList.length !== 0 && (
        <Row>
          <Col className="d-flex justify-content-between">
            <Button className="mb-4" variant="outline-danger" onClick={clear}>
              Vaciar carrito
            </Button>
            <Button className="mb-4" variant="outline-success">
              Comprar
            </Button>
          </Col>
        </Row>
      )}
      {cartList.length ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>QUITAR</th>
              <th>CANTIDAD</th>
              <th>DESCRIPCION</th>
              <th>PRECIO</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item) => (
              <tr key={item.id}>
                <td>
                  <Button onClick={() => removeItem(item.id)}>X</Button>
                </td>
                <td>{item.quantity}</td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>$ {calcSubtotal(item.id)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>TOTAL</td>
              <td>$ {calcTotal()}</td>
            </tr>
          </tfoot>
        </Table>
      ) : (
        <p>Carrito vacio</p>
      )}
    </Container>
  );
}

export default Cart;
