import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

function ItemDetailContainer(props) {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    async function getItem() {
      try {
        const docRef = doc(db, "products", itemId);
        const product = await getDoc(docRef);

        if (product.exists()) {
          setItem({ id: product.id, ...product.data() });
        } else {
          console.log("No such document!");
        }
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
