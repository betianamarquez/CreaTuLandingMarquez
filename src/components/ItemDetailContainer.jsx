import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          console.log("El producto no existe");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;