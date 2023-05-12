import React from "react";
import style from "./Navbar.module.scss";
import { GoChevronRight } from "react-icons/go";

function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.navbarlogo}>
        <div className={style.navbarlogoimg}></div>
        <div className={style.navbarlogospan}>
          <span>
            Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari
            Universiteti
          </span>
        </div>
      </div>
      <div className={style.navbarlinks}>
        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">Universitet</a>
          <GoChevronRight />
        </div>

        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">Faoliyat</a>
          <GoChevronRight />
        </div>

        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">Talabalarga</a>
          <GoChevronRight />
        </div>

        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">O`qituvchilarga</a>
          <GoChevronRight />
        </div>

        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">Faxrlarimmiz</a>
          <GoChevronRight />
        </div>

        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">Hamkorlarimmiz</a>
        </div>

        <div className={style.navbarlinkstop}>
          <a href="localhost:3000">Aloqa</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
