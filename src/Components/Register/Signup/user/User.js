import React from 'react'
import style from "./User.module.scss"
import { Link } from 'react-router-dom'

function User() {
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin}>
                    <form action="">
                        <h1>Saytga kirish</h1>
                        <input type="text" placeholder='Login' />
                        <input type="password" placeholder='Parol' maxLength={8} />
                        <input type="password" placeholder='Parolni takrorlang ' maxLength={8} />
                        <div className={style.kunflex}>
                            <Link to={"/kun"}>
                                <button>Oldingisi</button>
                            </Link>
                            <Link to={"/signin"}>
                                <button>Tugatish</button>
                            </Link>
                        </div>

                        <Link to={"/signin"}>Kirish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User