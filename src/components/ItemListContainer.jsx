import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { productsDatabase } from "../utils/productsDatabase";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchData(
          2000,
          categoryId === undefined
            ? productsDatabase
            : productsDatabase.filter(
                (product) => product.category === Number(categoryId)
              )
        );
        setItems(result);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [categoryId]);

  return (
    <Container className="mt-5">
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
