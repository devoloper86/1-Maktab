import React from 'react'
import style from "./Admin.module.scss"
import { Adminpage } from './Admin_data'

function Admin() {
    return (
        <div>
            <h1>Admin</h1>
            <div className="left" style={{ width: "1240px", display: "flex", border: "1px solid red", margin: "50px auto", textAlign: "center" }}>
                <div className={style.Admin}>
                    {Adminpage.map((nimadir) => (
                        <div className={style.Admindata} id='Admin'>
                            <div className={style.Admindataleft}>
                                <div className="">{nimadir.icon}</div>
                                <div className="">{nimadir.title}</div>
                            </div>
                            <div className="">{nimadir.righticon}</div>
                        </div>
                    ))}
                </div>
                <div className={style.Adminright} id='Adminright'>
                    <h1>565456</h1>
                </div>
            </div>
        </div>
    )
}

export default Admin