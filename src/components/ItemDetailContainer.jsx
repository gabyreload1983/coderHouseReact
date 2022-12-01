import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { productsDatabase } from "../utils/productsDatabase";
import ItemDetail from "./ItemDetail";
import Spinner from "react-bootstrap/Spinner";

function ItemDetailContainer(props) {
  const [item, setItem] = useState({});

  useEffect(() => {
    async function getItem() {
      try {
        const result = await fetchData(2000, productsDatabase[2]);
        setItem(result);
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
  }, []);
  return (
    <>
      {item.id ? (
        <ItemDetail item={item} />
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </>
  );
}

export default ItemDetailContainer;
