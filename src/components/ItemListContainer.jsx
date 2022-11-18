import { Container } from "react-bootstrap";

const ItemListContainer = (props) => {
  return (
    <Container className="mt-5">
      <h2>{props.greeting}</h2>
    </Container>
  );
};

export default ItemListContainer;
