import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
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