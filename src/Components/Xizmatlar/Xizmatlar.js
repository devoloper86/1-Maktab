import React from 'react'
import style from "./Xizmatlar.module.scss"
import { Xizmatlar_data, Xizmatlar_databottom } from "./Xizmatlar_data";

function Xizmatlar() {
    return (
        <div className={style.Xizmatlar}>
            <div className={style.Xizmatlartitle}>
                <div className={style.Xizmatlartitleline}></div>
                <h2>Interaktiv Xizmatlar</h2>
                <div className={style.Xizmatlartitleline}></div>
            </div>

            <div className="">
                <div className={style.Xizmatlarcard}>
                    {Xizmatlar_data.map((xiz => (
                        <div className={style.Xizmatlarcarddata}>
                            <div className="">
                                <div className={style.Xizmatlarcarddatad}>
                                    <div className={style.Xizmatlarcarddatatitle}>
                                        <h1>{xiz.title}</h1>
                                    </div>
                                    <div className={style.Xizmatlarcarddataradius}>{xiz.radius}</div>
                                    <div className={style.Xizmatlarcarddataline}>{xiz.line}</div>
                                    <div className={style.Xizmatlarcarddatarotate}>
                                        <div className={style.Xizmatlarcarddatarotaterotate}>{xiz.rotate}
                                            <div className={style.Xizmatlarcarddatarotateicons}>{xiz.Icons}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}



                </div>

                <div className={style.Xizmatlarcard}>
                    {Xizmatlar_databottom.map((xiz => (
                        <div className={style.Xizmatlarcarddata}>
                            <div className="" style={{ marginLeft: "100px", marginTop: "-40px" }}>
                                <div className={style.Xizmatlarcarddatad}>
                                    <div className={style.Xizmatlarcarddatarotate}>
                                        <div className={style.Xizmatlarcarddatarotaterotate}>{xiz.rotate}
                                            <div className={style.Xizmatlarcarddatarotateicons}>{xiz.Icons}</div></div>
                                    </div>
                                    <div className="" style={{ marginLeft: "59px", marginTop: "26px" }}>
                                        <div className={style.Xizmatlarcarddataline}>{xiz.line}</div>
                                        <div className={style.Xizmatlarcarddataradius} style={{ marginLeft: "-5px" }}>{xiz.radius}</div>
                                        <div className={style.Xizmatlarcarddatatitle} style={{ marginLeft: "-66px", marginTop: "10px" }}>
                                            <h1>{xiz.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}



                </div>
            </div>
        </div>
    )
}

export default Xizmatlar