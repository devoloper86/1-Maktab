import React from "react";
import "./App.css";
// import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Carusel from "./Components/Swiper/Carusel";
import Sciences from "./Components/Sciences/Sciences";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Carusel />
      <Sciences />
    </div>
  );
}

export default App;
