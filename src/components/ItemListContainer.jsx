import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  const handleAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos al carrito`);
  };

  return (
    <Container className="mt-5">
      <ItemCount initial={1} stock={4} onAdd={handleAdd} />
    </Container>
  );
};

export default ItemListContainer;
