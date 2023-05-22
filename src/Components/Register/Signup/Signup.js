import React from 'react'
import style from "./Signup.module.scss"
import Familiya from './Familiya/Familiya'

function Signup() {
    return (
        <div>
            <div className={style.Signin}>
                <Familiya />
            </div>
        </div >
    )
}

export default Signup