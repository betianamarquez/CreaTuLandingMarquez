import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setCount(count - 1)} disabled={count <= 1}>
        -
      </button>

      <span style={{ margin: "0 15px" }}>{count}</span>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <br />
      <br />

      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;