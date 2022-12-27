import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, "products"),
          categoryId === undefined
            ? ""
            : where("category", "==", Number(categoryId))
        );

        const products = await getDocs(q);

        setItems(products.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [categoryId]);

  return (
    <Container className="mt-5">
      {items.length ? (
        <ItemList items={items} />
      ) : (
        <BarLoader width="100%" color="#36d7b7" className="mb-3" />
      )}
    </Container>
  );
};

export default ItemListContainer;
