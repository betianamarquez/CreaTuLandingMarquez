import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ product }) => {

  const { removeItem } = useContext(CartContext);

  const title = product.Titulo || product["Titulo "];
  const price = product.Precio || product["Precio "];

  return (
    <div
      style={{
        border: "1px solid gray",
        marginBottom: "15px",
        padding: "15px"
      }}
    >
      <h3>{title}</h3>

      <p>Cantidad: {product.quantity}</p>

      <p>Precio: ${price}</p>

      <p>
        Subtotal: ${price * product.quantity}
      </p>

      <button
        onClick={() => removeItem(product.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;