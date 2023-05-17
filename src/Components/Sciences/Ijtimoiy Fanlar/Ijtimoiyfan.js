import React from "react";
import Navbar from "../../Navbar/Navbar";
import style from "./ijtimoiyfan.module.scss";
import { Fanlar } from "../static_data";

function Aniqfan() {
  return (
    <div>
      <Navbar />

      <div className={style.Sciences}>
        <div className="">
          <div className={style.Sciencestexttop}>
            <div className={style.Sciencestexttopline}></div>
            <h2>Ijtimoiy Fanlar</h2>
            <div className={style.Sciencestexttopline}></div>
          </div>

          <div className={style.Sciencescard}>
            <div className={style.Sciencescardcards}>
              {Fanlar.fan_data.map((fan) => (
                <div className={style.Sciencescardcardsgrid}>
                  <img src={fan.image} alt="" />
                  <div className={style.Sciencescardbottom}>
                    <h1>{fan.title}</h1>
                    <p>{fan.description}</p>
                    <div className={style.Sciencescardbottomflex}>
                      <span>{fan.time}</span>
                      <a href="">{fan.button}</a>
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
