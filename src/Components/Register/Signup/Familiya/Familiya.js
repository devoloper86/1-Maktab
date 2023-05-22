import React from 'react'
import style from "./Familiya.module.scss"
import { Link } from 'react-router-dom'

function Familiya() {
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin}>
                    <form action="">
                        <h1>Ro'yhatdan o'tish</h1>
                        <input type="text" placeholder='Ism' />
                        <input type="text" placeholder='Familiya' />
                        <input type="text" placeholder='Sharf' />
                        <Link to={"/Kun"}>
                            <button>Keyingisi</button>
                        </Link>

                        <Link to={"/signin"}>Kirish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Familiya