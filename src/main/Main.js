import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation,EffectCoverflow, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation"; // cover Effect
import "swiper/css/pagination";// cover Effect
import "swiper/css/effect-coverflow";// cover Effect
import Header from '../include/Header'

SwiperCore.use([Navigation, Pagination, Autoplay])
const Main = () => {


    return (
        <div id='topbox'>
        <Header/>
        <div id='blindbox'>
            <div></div>
            <div></div>
            <div></div>
        </div>

            <div id='midbox'>
            <Swiper
        spaceBetween={50} //슬라이드 여백
      slidesPerView={3} //한 슬라이드에서 보여줄 갯수
      scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
      navigation={false} //버튼
      // 커버 이펙트 사용
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }} 
      pagination={false}
      modules={[EffectCoverflow, Pagination]} // 커버이펙트 /
      autoplay={{delay: 3000}} //3초마다 자동으로 넘기기
      loop={true} //무한반복
        >

             <SwiperSlide>
            <div className='inbox' >
            <img src='img/aven.jpg' alt=''></img>
            <div className='textbox'>
                <p>The Avengers</p>
                <span>2012Year</span>
                <b><img src='img/america.png' alt=''></img></b>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='inbox' >
               <img src='img/aven.jpg' alt=''></img>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='inbox' >
                <img src='img/aven.jpg' alt=''></img>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className='inbox' >
                <img src='img/aven.jpg' alt=''></img>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='inbox' >
               <img src='img/aven.jpg' alt=''></img>
            </div>
            </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Main;