import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(CartContext);

  const [added, setAdded] = useState(false);

  const onAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <img
        src={product.Imagen || product["Imagen "]}
        alt={product.Titulo || product["Titulo "]}
        width="250"
      />

      <h2>
        {product.Titulo || product["Titulo "]}
      </h2>

      <h3>
        ${product.Precio || product["Precio "]}
      </h3>

      <p>
        {product.Descripción || product["Descripción "]}
      </p>

      <p>
        Stock: {product.Stock || product["Stock "]}
      </p>

      {!added ? (
        <ItemCount
          stock={product.Stock || product["Stock "]}
          onAdd={onAdd}
        />
      ) : (
        <h3>Producto agregado al carrito ✅</h3>
      )}
    </div>
  );
};

export default ItemDetail;