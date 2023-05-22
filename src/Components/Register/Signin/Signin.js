import React from 'react'
import style from "./Signin.module.scss"
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin}>
                    <form action="">
                        <h1>Saytga kirish</h1>
                        <input type="text" placeholder='Login' />
                        <input type="password" placeholder='Parol' maxLength={8} />
                        <button>Saytga Kirish</button>

                        <Link to={"/signup"}>Ro'yhatdan o'tish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin