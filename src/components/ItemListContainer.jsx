import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { productsDatabase } from "../utils/productsDatabase";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = (props) => {
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
      <ItemDetailContainer />
      {items.length ? (
        <ItemList items={items} />
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </Container>
  );
};

export default ItemListContainer;
