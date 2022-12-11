import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function Cart(props) {
  const { cartList, removeItem, clear } = useContext(CartContext);

  return (
    <>
      <h1>cart</h1>
      {cartList.length !== 0 && <Button onClick={clear}>Vaciar carrito</Button>}
      {cartList.length ? (
        <ul>
          {cartList.map((item) => (
            <li key={item.id}>
              Cantidad: {item.quantity} - {item.title} - precio: ${item.price} -{" "}
              <Button onClick={() => removeItem(item.id)}>X</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carrito vacio</p>
      )}
    </>
  );
}

export default Cart;
