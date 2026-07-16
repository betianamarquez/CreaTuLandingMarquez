import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        width: "250px",
      }}
    >
      <img
        src={product.Imagen || product["Imagen "]}
        alt={product.Titulo || product["Titulo "]}
        width="200"
      />

      <h3>
        {product.Titulo || product["Titulo "]}
      </h3>

      <p>
        ${product.Precio || product["Precio "]}
      </p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;