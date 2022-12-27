import { Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <BsCart3 size={25} />
      <Badge className="ms-2">{cart.calcItems()}</Badge>
    </>
  );
};

export default CartWidget;
