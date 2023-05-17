import React from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    let price = e.target[1].value;
    let color = e.target[2].value;
    const docRef = await addDoc(collection(db, "products"), {
      title,
      price: Number(price),
      color: color(color),
    });

    navigate("/");
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form
        onSubmit={formSubmit}
        action="#"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="name">Title</label>
        <input type="text" name="title" placeholder="title" />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" placeholder="price" />
        <label htmlFor="color">Color</label>
        <input type="color" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Admin;
