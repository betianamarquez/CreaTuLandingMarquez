import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    if (categoryId) {
      const q = query(
        productsCollection,
        where("Categoria", "==", categoryId)
      );

      getDocs(q)
        .then((snapshot) => {
          const productsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log("Productos por categoría:", productsList);

          setProducts(productsList);
        })
        .catch((error) => {
          console.log(error);
        });

    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          const productsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log("Todos los productos:", productsList);

          setProducts(productsList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;