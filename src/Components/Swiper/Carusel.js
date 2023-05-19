import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Carusel.css";
import { Autoplay, Scrollbar } from "swiper";
import imgone from "../../Image/Matematika.jpg"
import imgone1 from "../../Image/Algebra.png"
import imgone2 from "../../Image/Informatika.jpg"
import imgone3 from "../../Image/Tarix.jpg"

function Carusel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
  };
  return (
    <div className="Carusel">
      <>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Scrollbar, Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide><img src={imgone} alt="" /></SwiperSlide>
          <SwiperSlide><img src={imgone1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={imgone2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={imgone3} alt="" /></SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </div>
  );
}

export default Carusel;
