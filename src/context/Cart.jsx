import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>El carrito está vacío</h2>

        <Link to="/">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito</h2>

      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <h2>Total: ${totalPrice()}</h2>

      <button onClick={clear}>
        Vaciar carrito
      </button>

      <br />
      <br />

      <Link to="/checkout">
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;