import React from "react";
import Navbar from "../../Navbar/Navbar";
import style from "./Aniqfan.module.scss";
import { Fanlar } from "../static_data";
import { Link, useLocation } from "react-router-dom";

function Aniqfan() {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <Navbar />

      <div className={style.Sciences}>
        <div className="">
          <div className={style.Sciencestexttop}>
            <div className={style.Sciencestexttopline}></div>
            <h2>Aniq Fanlar</h2>
            <div className={style.Sciencestexttopline}></div>
          </div>

          <div className={style.Sciencescard}>
            <div className={style.Sciencescardcards}>
              {location.state?.fan_data.map((fan) => (
                <div className={style.Sciencescardcardsgrid}>
                  <img src={fan.image} alt="" />
                  <div className={style.Sciencescardbottom}>
                    <h1>{fan.title}</h1>
                    <p>{fan.description}</p>
                    <div className={style.Sciencescardbottomflex}>
                      <span>{fan.time}</span>
                      <Link
                        to={`${location.pathname}/${fan.route}`}
                        state={fan}
                      >
                        {fan.button}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aniqfan;
