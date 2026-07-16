import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {

  const [count, setCount] = useState(1);

  return (
    <div>

      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 1}
      >
        -
      </button>

      <span style={{ margin: "0 15px" }}>
        {count}
      </span>

      <button
        onClick={() => setCount(count + 1)}
        disabled={count === stock}
      >
        +
      </button>

      <br /><br />

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>

    </div>
  );
};

export default ItemCount;