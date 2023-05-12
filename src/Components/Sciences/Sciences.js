import React from "react";
import style from "./Sciences.module.scss";
import { Fanlar } from "./static_data";

function Sciences() {
  return (
    <div className={style.Sciences}>
      <div className="">
        <div className={style.Sciencestexttop}>
          <div className={style.Sciencestexttopline}></div>
          <h2>Fanlar</h2>
          <div className={style.Sciencestexttopline}></div>
        </div>

        <div className={style.Sciencescard}>

          <div className={style.Sciencescardcards}>
            {Fanlar.map((fan) => (
              <div className="">
                <img src={fan.image} alt="" />
                <div className={style.Sciencescardbottom}>
                  <h1>{fan.title}</h1>
                  <p>{fan.description}</p>
                  <div className={style.Sciencescardbottomflex}>
                    <span>{fan.time}</span>
                    <a href="sas">{fan.button}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.Sciencescardcards}>
            {Fanlar.map((fan) => (
              <div className="">
                <img src={fan.image} alt="" />
                <div className={style.Sciencescardbottom}>
                  <h1>{fan.title}</h1>
                  <p>{fan.description}</p>
                  <div className={style.Sciencescardbottomflex}>
                    <span>{fan.time}</span>
                    <a href="sas">{fan.button}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.Sciencescardcards}>
            {Fanlar.map((fan) => (
              <div className="">
                <img src={fan.image} alt="" />
                <div className={style.Sciencescardbottom}>
                  <h1>{fan.title}</h1>
                  <p>{fan.description}</p>
                  <div className={style.Sciencescardbottomflex}>
                    <span>{fan.time}</span>
                    <a href="sas">{fan.button}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.Sciencescardcards}>
            {Fanlar.map((fan) => (
              <div className="">
                <img src={fan.image} alt="" />
                <div className={style.Sciencescardbottom}>
                  <h1>{fan.title}</h1>
                  <p>{fan.description}</p>
                  <div className={style.Sciencescardbottomflex}>
                    <span>{fan.time}</span>
                    <a href="sas">{fan.button}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sciences;
