import { Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <BsCart3 size={25} />
      <Badge className="ms-2">5</Badge>
    </>
  );
};

export default CartWidget;
