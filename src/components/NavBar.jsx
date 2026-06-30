import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#111827",
        color: "white",
        padding: "20px 40px",
      }}
    >
      <h2>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          MiTienda
        </Link>
      </h2>

      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
        }}
      >
        <li>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/"
          >
            Inicio
          </Link>
        </li>

        <li>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/zapatillas"
          >
            Zapatillas
          </Link>
        </li>

        <li>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/remeras"
          >
            Remeras
          </Link>
        </li>

        <li>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/pantalones"
          >
            Pantalones
          </Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;