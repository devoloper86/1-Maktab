import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Aniqfan from "./Components/Sciences/Aniqfan/Aniqfan";
// import Admin from "./Components/Admin/Admin";
import Ijtimoiyfan from "./Components/Sciences/Ijtimoiy Fanlar/Ijtimoiyfan";
import Matematika from "./Components/Sciences/Aniqfan/Matematika/Matematika";
import Singleclass from "./pages/Singleclass/Singleclass";
import Algebra from "./Components/Sciences/Aniqfan/Algebra/Algebra";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aniq_fan" element={<Aniqfan />} />
        <Route path="/aniq_fan/:name" element={<Matematika />} />
        <Route path="/aniq_fan/:name" element={<Algebra />} />
        <Route path="/aniq_fan/:name/:name" element={<Singleclass />} />
        <Route path="/ijtimoiy_fan" element={<Ijtimoiyfan />} />
        {/* <Route path="/Matematika" element={<Matematika />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </div>
  );
}

export default Routers;
