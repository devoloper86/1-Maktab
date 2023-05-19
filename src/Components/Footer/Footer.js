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
                    <div className={style.Footermainright}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.64668188020713!2d71.72251850734024!3d41.1924098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4b1bd71e9bdd7%3A0xaa0f5121af27b00c!2z0KjQutC-0LvQsCDihJYx!5e0!3m2!1suz!2s!4v1684496253854!5m2!1suz!2s" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer