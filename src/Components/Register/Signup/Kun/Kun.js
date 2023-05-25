import React from 'react'
import style from "./Kun.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import db from "../../../firebase/firebaseConfig"

function Kun() {
    const navigate = useNavigate()
    const formFunction = (e) => {
        e.preventDefault()
        navigate("/user")
    }

    const getFormData = async (e) => {
        e.preventDefault()

        let birthday = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
        console.log("done")

        await addDoc(collection(db, "users"), {
            birthday,
            email,
            password
        });
    }
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin} onSubmit={formFunction}>
                    <form action="" onSubmit={getFormData}>
                        <h1>Tug'ulgan kun</h1>
                        <input type="date" placeholder='Date' required />
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder="Emailni ko'di" required />
                        <div className={style.kunflex}>
                            <Link to={"/ism"}>
                                <button>Oldingisi</button>
                            </Link>
                            <button type='submit'>Keyingisi</button>
                        </div>

                        <Link to={"/signin"}>Kirish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kun