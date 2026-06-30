import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/asyncMock";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getProducts().then((respuesta) => {
        setProducts(respuesta);
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