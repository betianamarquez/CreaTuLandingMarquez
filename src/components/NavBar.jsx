import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#f5f5f5",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Urban Import
      </Link>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/">
          Inicio
        </Link>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;