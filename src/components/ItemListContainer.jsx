import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [categoryId]);

  return (
    <Container className="mt-5">
      {loading && <BarLoader width="100%" color="#36d7b7" className="mb-3" />}
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
