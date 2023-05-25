import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Aniqfan from "./Components/Sciences/Aniqfan/Aniqfan";
import Admin from "./Components/Admin/Admin";
import Ijtimoiyfan from "./Components/Sciences/Ijtimoiy Fanlar/Ijtimoiyfan";
import Matematika from "./Components/Sciences/Aniqfan/Matematika/Matematika";
import Singleclass from "./pages/Singleclass/Singleclass";
import Algebra from "./Components/Sciences/Aniqfan/Algebra/Algebra";
import Signup from "./Components/Register/Signup/Signup";
import Signin from "./Components/Register/Signin/Signin";
import Familiya from "./Components/Register/Signup/Familiya/Familiya";
import Kun from "./Components/Register/Signup/Kun/Kun";
import User from "./Components/Register/Signup/user/User";
import Main from "./pages/Main";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kirish" element={<Main />} />
        <Route path="/aniq_fan" element={<Aniqfan />} />
        <Route path="/Matematika" element={<Matematika />} />
        <Route path="sasa" element={<Algebra />} />
        <Route path="asas" element={<Singleclass />} />
        <Route path="/ijtimoiy_fan" element={<Ijtimoiyfan />} />
        {/* <Route path="/Matematika" element={<Matematika />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="ism" element={<Familiya />} />
        <Route path="kun" element={<Kun />} />
        <Route path="user" element={<User />} />


      </Routes>
    </div>
  );
}

export default Routers;
