import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  collection,
  increment,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { BarLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartList, removeItem, clear, calcSubtotal, calcTotal } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const createOrderInFirestore = async (order) => {
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    return newOrderRef;
  };

  const createOrder = async () => {
    try {
      setLoading(true);
      const order = {
        buyer: {
          name: "Leo Messi",
          email: "leomessi@gmail.com",
          phone: "1234567",
        },
        date: serverTimestamp(),
        products: cartList.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity,
        })),
        total: calcTotal(),
        state: "generated",
      };

      const res = await createOrderInFirestore(order);
      if (res) {
        cartList.forEach(async (p) => {
          const productRef = doc(db, "products", p.id);
          await updateDoc(productRef, {
            stock: increment(-p.quantity),
          });
        });
        setLoading(false);
        clear();
        toast.success(
          `Gracias por tu compra.
        El numero de tu orden de compra es: ${res.id}`,
          {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      {loading && <BarLoader width="100%" color="#36d7b7" className="mb-3" />}
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
                  <td className="text-uppercase">{item.title}</td>
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
            <Button
              variant="outline-success"
              onClick={createOrder}
              disabled={loading ? true : false}
            >
              Terminar Comprar
            </Button>
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
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </Container>
  );
}

export default Cart;
