import React from "react";
import { useContext } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart(props) {
  const { cartList, removeItem, clear, calcSubtotal, calcTotal } =
    useContext(CartContext);

  return (
    <Container className="mt-2">
      <h2>MI CARRITO</h2>
      {cartList.length !== 0 && (
        <Row>
          <Col className="mb-4">
            <ButtonGroup>
              <Button variant="outline-danger" onClick={clear}>
                Vaciar carrito
              </Button>
              <Button variant="outline-info" as={Link} to="/">
                Seguir Comprando
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      )}
      {cartList.length ? (
        <>
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
          <Col className="d-flex justify-content-end">
            <Button variant="outline-success">Terminar Comprar</Button>
          </Col>
        </>
      ) : (
        <>
          <span>Carrito vacio</span>
          <Button variant="outline-info ms-3" as={Link} to="/">
            Seguir Comprando
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
