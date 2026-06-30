import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <h2>Cargando...</h2>}
    </div>
  );
};

export default ItemDetailContainer;