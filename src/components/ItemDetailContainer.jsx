import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { productsDatabase } from "../utils/productsDatabase";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function ItemDetailContainer(props) {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    async function getItem() {
      try {
        const result = await fetchData(
          2000,
          productsDatabase.find((product) => product.id === Number(itemId))
        );
        setItem(result);
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
  }, [itemId]);

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <ItemDetail item={item} />
    </Container>
  );
}

export default ItemDetailContainer;
