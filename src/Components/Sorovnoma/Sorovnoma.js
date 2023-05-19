import React from 'react'
import style from "./Sorovnoma.module.scss"
import { Abuturentlarga, Oquvchilar, Talabalarga } from './Sorovnoma_data'

function Sorovnoma() {
    return (
        <div className={style.Sorovnoma}>
            <div className={style.Sorovnomacontainer}>
                <div className="">
                    <div className={style.title}>
                        <h1>Abuturentlarga</h1>
                    </div>
                    <div className={style.Abuturent}>
                        {Abuturentlarga.map((Abuturent) => (
                            <div className={style.Abuturentflex}>
                                <div className={style.Abuturenticon}>
                                    <div className={style.Abuturenticoni}>{Abuturent.icon}</div>
                                </div>
                                <div className={style.Abuturenttext}>
                                    <h1>{Abuturent.title}</h1>
                                    <p>{Abuturent.word}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <div className={style.title}>
                        <h1>Talabalarga</h1>
                    </div>
                    <div className={style.Abuturent}>
                        {Talabalarga.map((Abuturent) => (
                            <div className={style.Abuturentflex}>
                                <div className={style.Abuturenticon}>
                                    <div className={style.Abuturenticoni}>{Abuturent.icon}</div>
                                </div>
                                <div className={style.Abuturenttext}>
                                    <h1>{Abuturent.title}</h1>
                                    <p>{Abuturent.word}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className={style.bush}></div>

            <div className={style.Surovbottom}>
                <div className={style.Surovbottommap}>
                    {Oquvchilar.map((value) => (
                        <div className={style.Surovbottommain}>
                            <div className={style.Surovbottomicon}>{value.icon}</div>
                            <div className={style.Surovbottomnumber}>{value.number}</div>
                            <div className={style.Surovbottomtitle}>{value.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sorovnoma