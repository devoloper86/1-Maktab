import React from "react";
import style from "./Matematika.module.scss";
import { Fanlar } from "../../static_data";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";

function Matematika() {
  const data = useLocation().state;
  console.log(data);
  return (
    <div>
      <Navbar />

      <div className={style.Sciences}>
        <div className="">
          <div className={style.Sciencestexttop}>
            <div className={style.Sciencestexttopline}></div>
            <h2>Fanlar</h2>
            <div className={style.Sciencestexttopline}></div>
          </div>
          <div className={style.Sciencescard}>
            <div className={style.Sciencescardcards}>
              {data?.fan_science?.map((fan) => (
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
    </div>
  );
}

export default Matematika;
