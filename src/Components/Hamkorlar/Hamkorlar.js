import React, { useRef } from 'react'
import style from "./Hamkorlar.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Scrollbar } from "swiper";
import imgone from "../../Image/Matematika.jpg"
import imgone1 from "../../Image/Algebra.png"
import imgone2 from "../../Image/Informatika.jpg"
import imgone3 from "../../Image/Tarix.jpg"

function Hamkorlar() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
    };
    return (
        <div className={style.Hamkorlar}>
            <div className={style.Hamkorlartop}>
                <div className={style.Hamkorlarline}></div>
                <h2>Bizning hamkorlar</h2>
                <div className={style.Hamkorlarline}></div>
            </div>
            <div className={style.Carusel}>
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    slidesPerView={5}
                    // centeredSlides={true}
                    spaceBetween={30}
                    // grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    // spaceBetween={30}
                    // centeredSlides={true}
                    autoplay={{
                        // delay: 2500,
                        // disableOnInteraction: false,
                    }}
                    modules={[Scrollbar, Autoplay, Pagination]}
                    // onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className={style.mySwiper}
                >
                    <SwiperSlide className={style.swiperslide}><img src={imgone} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone1} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone2} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <SwiperSlide className={style.swiperslide}><img src={imgone3} alt="" /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Hamkorlar