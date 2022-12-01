import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { productsDatabase } from "../utils/productsDatabase";

const ItemListContainer = (props) => {
  const handleAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos al carrito`);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchData(2000, productsDatabase);
        setItems(result);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <Container className="mt-5">
      {items.length ? (
        <ItemList items={items} />
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
      <ItemCount initial={1} stock={4} onAdd={handleAdd} />
    </Container>
  );
};

export default ItemListContainer;
