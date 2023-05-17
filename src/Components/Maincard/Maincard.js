import React from "react";
import style from "./maicard.module.scss";
import { Cards } from "./Main_data";

function Maincard() {
  return (
    <div className={style.Maincard}>
      <div className={style.Maincardcards}>
        <div className={style.Maincardflex}>
          {Cards.map((card) => (
            <div className={style.Maincardcardscard}>
              <div className={style.Maincardline}>{card.line}</div>
              <h1>{card.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Maincard;
