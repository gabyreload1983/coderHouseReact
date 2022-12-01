import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { productsDatabase } from "../utils/productsDatabase";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    async function getData() {
      setLoad(true);
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
      } finally {
        setLoad(false);
      }
    }
    getData();
  }, [categoryId]);

  return (
    <Container className="mt-5">
      {load && <BarLoader width="100%" color="#36d7b7" className="mb-3" />}
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
