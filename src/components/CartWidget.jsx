import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      style={{
        textDecoration: "none",
        color: "black",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      🛒 {totalQuantity()}
    </Link>
  );
};

export default CartWidget;