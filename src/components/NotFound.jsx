import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>

      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;