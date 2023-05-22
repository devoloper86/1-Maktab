import React from 'react'
import style from "./Kun.module.scss"
import { Link } from 'react-router-dom'

function Kun() {
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin}>
                    <form action="">
                        <h1>Tug'ulgan kun</h1>
                        <input type="date" placeholder='Date' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder="Emailni ko'di" />
                        <div className={style.kunflex}>
                            <Link to={"/ism"}>
                                <button>Oldingisi</button>
                            </Link>
                            <Link to={"/user"}>
                                <button>Keyingisi</button>
                            </Link>
                        </div>

                        <Link to={"/signin"}>Kirish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kun