import ItemCount from "./ItemCount";
const ItemDetail = ({ product }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        width="250"
      />

      <h2>{product.title}</h2>

      <h3>${product.price}</h3>

      <p>{product.description}</p>

      <p>Stock: {product.stock}</p>
      <ItemCount />
      
    </div>
  );
};

export default ItemDetail;