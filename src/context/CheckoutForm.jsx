import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import { addDoc, collection } from "firebase/firestore";

import { db } from "../firebase/config";

const CheckoutForm = () => {

  const { cart, totalPrice, clear } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [orderId, setOrderId] = useState("");

  const finalizarCompra = () => {

    if (!name || !phone || !email) {
      alert("Completa todos los campos");
      return;
    }

    const order = {
      buyer: {
        name,
        phone,
        email
      },

      items: cart.map((product) => ({
        id: product.id,
        title: product.Titulo || product["Titulo "],
        price: product.Precio || product["Precio "],
        quantity: product.quantity
      })),

      total: totalPrice(),

      date: new Date()
    };


    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((respuesta) => {

        setOrderId(respuesta.id);

        clear();

      })
      .catch((error) => {
        console.log(error);
      });

  };


  if (orderId !== "") {

    return (
      <div style={{ textAlign: "center" }}>

        <h2>¡Compra realizada con éxito!</h2>

        <h3>ID de la compra:</h3>

        <h2>{orderId}</h2>

      </div>
    );

  }


  return (

    <div style={{ textAlign: "center" }}>

      <h2>Checkout</h2>


      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />


      <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />


      <button onClick={finalizarCompra}>
        Confirmar compra
      </button>


    </div>

  );

};

export default CheckoutForm;