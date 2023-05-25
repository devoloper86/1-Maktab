import React from 'react'
import style from "./User.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import db from "../../../firebase/firebaseConfig"

function User() {
    const navigate = useNavigate()
    const formFunction = (e) => {
        e.preventDefault()
        navigate("/signin")
    }

    const getFormData = async (e) => {
        e.preventDefault()

        let login = e.target[0].value
        let password = e.target[1].value
        let checpass = e.target[2].value
        console.log("done")
        await addDoc(collection(db, "users"), {
            login,
            password,
            checpass,
        });
    }
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin} onSubmit={formFunction}>
                    <form action="" onSubmit={getFormData}>
                        <h1>Saytga kirish</h1>
                        <input type="text" placeholder='Login' required />
                        <input type="password" placeholder='Parol' maxLength={8} required />
                        <input type="password" placeholder='Parolni takrorlang ' maxLength={8} required />
                        <div className={style.kunflex}>
                            <Link to={"/kun"}>
                                <button>Oldingisi</button>
                            </Link>
                            <button type='submit'>Tugatish</button>
                        </div>

                        <Link to={"/signin"}>Kirish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User