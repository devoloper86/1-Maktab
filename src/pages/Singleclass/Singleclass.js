import React from "react";
import { useLocation } from "react-router-dom";

function Singleclass() {
  const data = useLocation().state;
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt="" />
    </div>
  );
}

export default Singleclass;
