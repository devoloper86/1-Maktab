import React, { useEffect, useState } from 'react'
import style from "./Signin.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import db from "../../firebase/firebaseConfig"
import { collection, getDocs } from 'firebase/firestore'

function Signin() {
    let navigate = useNavigate()
    const [Users, setUsers] = useState([])

    console.log(Users)
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            let box = []
            querySnapshot.forEach((doc) => {
                box.push({ id: doc.id, data: doc.data() })
            });
            setUsers(box)
        }
        getData()
    }, [])

    const checkFunction = (e) => {
        e.preventDefault()
        let login = e.target[0].value
        let password = e.target[1].value

        let checked = Users.find(user => user.data.login === login && user.data.password === password)
        // console.log(checked)

        if (checked) {
            console.log("user bor")
            navigate("/kirish")
        } else {
            window.alert("User topilmadi iltimos ro'yhatdan o'ting")
        }
    }
    return (
        <div>
            <div className={style.Signin}>
                <div className={style.Signinmargin}>
                    <form action="" onSubmit={checkFunction}>
                        <h1>Saytga kirish</h1>
                        <input type="text" placeholder='Login' required />
                        <input type="password" placeholder='Parol' maxLength={8} required />
                        <button>Saytga Kirish</button>

                        <Link to={"/signup"}>Ro'yhatdan o'tish</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin