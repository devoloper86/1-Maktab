import React from "react";
import style from "./Elomlar.module.scss";
import { Fanlar } from "../Sciences/static_data";
import { Link } from "react-router-dom";

function Elonlar() {
  return (
    <div>
      <div className={style.Sciences}>
        <div className="">
          <div className={style.Sciencestexttop}>
            <div className={style.Sciencestexttopline}></div>
            <h2>So'ngi Elonlar</h2>
            <div className={style.Sciencestexttopline}></div>
          </div>

          <div className={style.Sciencescard}>
            <div className={style.Sciencescardcards}>
              {Fanlar.map((fan) => (
                <div className={style.Sciencescardcardsgrid}>
                  <img src={fan.image} alt="" />
                  <div className={style.Sciencescardbottom}>
                    <h1>{fan.title}</h1>
                    <p>{fan.description}</p>
                    <div className={style.Sciencescardbottomflex}>
                      <span>{fan.time}</span>
                      <Link to={fan.route} state={fan}>
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
      <div className={style.ElonBtn}>
        <Link>Barchasi</Link>
      </div>
    </div>
  );
}

export default Elonlar;
