import React from 'react'
import style from "./Familiya.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import db from "../../../firebase/firebaseConfig"
import { addDoc, collection } from 'firebase/firestore'

function Familiya() {
    const navigate = useNavigate()
    const formFunction = (e) => {
        e.preventDefault()
        navigate("/kun")
    }

    const getFormData = async (e) => {
        e.preventDefault()

        let name = e.target[0].value
        let lastname = e.target[1].value
        let sharf = e.target[2].value
        console.log("done")
        await addDoc(collection(db, "users"), {
            name,
            lastname,
            sharf,
        });
        console.log(name);
    }

    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin} onSubmit={formFunction}>
                    <form action="" onSubmit={getFormData}>
                        <h1>Ro'yhatdan o'tish</h1>
                        <input type="text" placeholder='Ism' required />
                        <input type="text" placeholder='Familiya' required />
                        <input type="text" placeholder='Sharf' required />
                        <button type='submit'>Keyingisi</button>

                        <Link to={"/signin"}>Kirish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Familiya