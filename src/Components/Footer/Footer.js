import React from 'react'
import style from "./Footer.module.scss"
import logo from "../../Image/img.jpg"
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className={style.Footer}>
                <div className={style.Footermain}>
                    <div className={style.Footermainleft}>
                        <div className={style.Footermainimgl}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={style.Footermaintext}>
                            <p>Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti</p>
                        </div>
                        <div className={style.Footermainicons}>
                            <FaTelegram style={{ color: "#039BE5" }} />
                            <FaFacebook style={{ color: "#475993" }} />
                            <FaInstagram style={{ color: "#71197F" }} />
                            <FaYoutube style={{ color: "#F61C0D" }} />
                        </div>
                    </div>
                    <div className={style.Footermaincenter}>
                        <div className={style.Footermaintitle}>
                            <h3>Bog'lanish</h3>
                        </div>
                        <div className={style.Footermainlist}>
                            <ul>
                                <li>Manzil: Toshkent 100084, Amir Temur shox ko‘chasi 108 uy</li>
                                <li>Jamoat transportlari:
                                    10, 17, 19, 24, 38, 51, 60, 67, 72, 93, 115, 140</li>
                                <li>Virtual qabulxona</li>
                                <li>Telefon: +998 71 238 64 15</li>
                                <li>E-mail: info@tuit.uz</li>
                                <li>Ish grafigi: Dushanba - Shanba 8:30 - 18:00</li>
                                <li>Yakshanba dam olish kuni</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.Footermainright}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer