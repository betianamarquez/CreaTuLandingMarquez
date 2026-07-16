import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ItemList;