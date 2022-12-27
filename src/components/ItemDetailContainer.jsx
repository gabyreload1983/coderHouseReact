import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { BarLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getItem();
  }, [itemId]);

  async function getItem() {
    try {
      const docRef = doc(db, "products", itemId);
      const product = await getDoc(docRef);

      if (product.exists()) {
        setItem({ id: product.id, ...product.data() });
      } else {
        toast.warn("NO EXISTE ESE PRODUCTO!", {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          theme: "dark",
          toastId: itemId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      {!item.id ? (
        <BarLoader width="100%" color="#36d7b7" />
      ) : (
        <ItemDetail item={item} />
      )}
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="dark"
      />
    </Container>
  );
}

export default ItemDetailContainer;
