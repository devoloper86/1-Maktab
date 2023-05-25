import React, { useEffect } from "react";
import "./App.css";
import Signin from "./Components/Register/Signin/Signin";
import { collection, getDocs } from "firebase/firestore";
import db from "./Components/firebase/firebaseConfig"

function App() {
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      let box = []
      querySnapshot.forEach((doc) => {
        box.push({ id: doc.id, data: doc.data() })
      });
      console.log(box)
    }
    getData()
  }, [])
  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
