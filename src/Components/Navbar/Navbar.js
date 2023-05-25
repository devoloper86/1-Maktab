import React, { useState } from "react";
import style from "./Navbar.module.scss";
import { GoChevronRight } from "react-icons/go";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [OpenClose, setOpenClose] = useState(true)

  // const OpenSidebar = () => {
  //   if (OpenClose === false) {
  //     Sidebar.style.transform = "translateX(0)";
  //     OpenClose = true;
  //   } else {
  //     Sidebar.style.transform = "translateX(-300px)";
  //     OpenClose = false;
  //   }

  // };
  const CloseSidebar = () => {
    if (!OpenClose) {
      setOpenClose(true)
    } else {
      setOpenClose(false)
    }
  };
  return (
    <div className={style.Navbar}>
      <div className={style.Navbar1}>
        <div className={style.navbarlogo}>
          <div className={style.navbarlogoimg}></div>
          <div className={style.navbarlogospan}>
            <span>
              Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari
              Universiteti
            </span>
          </div>
        </div>


        <div className={style.mediabtn}>
          <button onClick={CloseSidebar}><FaBars /></button>
        </div>
      </div>
      <div className={style.navbarmain} onClick={CloseSidebar} style={OpenClose ? { display: "block" } : { display: "none" }}>
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
            <a href="localhost:3000">Abuturent</a>
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
            <a href="/admin">Aloqa</a>
          </div>
        </div>
        <div className={style.navbarlinksbottom}></div>
      </div>
    </div>
  );
}

export default Navbar;
