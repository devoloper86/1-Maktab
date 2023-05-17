import React from "react";
import "./App.css";
// import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Carusel from "./Components/Swiper/Carusel";
import Sciences from "./Components/Sciences/Sciences";
import Elonlar from "./Components/Elon/Elonlar";
import Maincard from "./Components/Maincard/Maincard";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Carusel />
      <Sciences />
      <Elonlar />
      <Maincard />
    </div>
  );
}

export default App;
