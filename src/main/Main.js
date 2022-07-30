import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation,EffectCoverflow, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation"; // cover Effect
import "swiper/css/pagination";// cover Effect
import "swiper/css/effect-coverflow";// cover Effect
import { Link } from 'react-router-dom';
import Header from '../include/Header'

SwiperCore.use([Navigation, Pagination, Autoplay])


const Main = () => {
    // 클릭시 클래스 입력으로 인한 팝업
    function PopUp(){
        document.querySelector('#blindbox').classList.toggle('on');
        document.querySelector('#midbox').classList.toggle('off');
    }
    

    return (
        <div id='topbox'>
        <Header/>
        <div id='blindbox'>
            <div className='m_img'><img src='img/aven1.jpg'/></div>
            <div className='m_img'><img src='img/aven2.jpg'/></div>
            <div id='contentbox'>
            <p>어벤져스</p>
            <span>2012Year</span>
            <b><img src='img/america.png' alt=''></img></b>
            <div className='btn_even'>
            <Link to='/detail'><p>자세히 보기</p></Link>
            <p onClick={()=>PopUp()}>되돌아가기</p>
            </div>
            </div>
       
        </div>

            <div id='midbox'>
            <Swiper
        spaceBetween={50} //슬라이드 여백
      slidesPerView={3} //한 슬라이드에서 보여줄 갯수
      scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
      navigation={false} //버튼
      pagination={false}
      modules={[EffectCoverflow, Pagination]} // 커버이펙트 /
      autoplay={{delay: 3000}} //3초마다 자동으로 넘기기
      loop={true} //무한반복
        >

             <SwiperSlide>
            <div className='inbox' >
            <img src='img/aven.jpg' alt=''></img>
            <div className='textbox'>
                <p onClick={()=>PopUp()}>Click</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='inbox' >
            <img src='img/aven.jpg' alt=''></img>
            <div className='textbox'>
                <p onClick={()=>PopUp()}>Click</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='inbox' >
            <img src='img/aven1.jpg' alt=''></img>
            <div className='textbox'>
                <p onClick={()=>PopUp()}>Click</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='inbox' >
            <img src='img/aven2.jpg' alt=''></img>
            <div className='textbox'>
                <p onClick={()=>PopUp()}>Click</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='inbox' >
            <img src='img/aven3.jpg' alt=''></img>
            <div className='textbox'>
                <p onClick={()=>PopUp()}>Click</p>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Main;