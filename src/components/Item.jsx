import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <p>{product.category}</p>

      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;