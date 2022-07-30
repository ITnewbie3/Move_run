import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation,Mousewheel,EffectCoverflow, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import './style.css'

const DetailMovie = () => {
   
    SwiperCore.use([Navigation, Pagination, Autoplay])
    return (


        <div id='detail'>
            <div id='imgdiv' >
            <Swiper
            direction={"vertical"}
        spaceBetween={50} //슬라이드 여백
      slidesPerView={1} //한 슬라이드에서 보여줄 갯수
      scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
      navigation={false} //버튼
      autoplay={{delay: 3000}} //3초마다 자동으로 넘기기
      loop={true} //무한반복
      pagination={{ clickable: true }}
      mousewheel={true}
      modules={[Mousewheel, Pagination]}
        > <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven3.jpg' alt=''/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven1.jpg' alt=''/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='movediv'>
                <img src='img/aven2.jpg' alt=''/>
                </div>
                </SwiperSlide>
                </Swiper>
                </div>

            <div id='detaildiv'>
                <div>
                    <p className='menuname'>cast</p>
                    <div id='castdiv'>
                            <div className='cast'>
                            <img src='img/rovert.jpg' alt=''/>
                            <p>Robert Downey Jr.</p>
                            <span>Tony Stark / Iron Man</span>
                            </div>
                            <div className='cast'>
                            <img src='img/scal.jpg' alt=''/>
                            <p>Scarlett Johansson</p>
                            <span>Natasha Romanoff / Black Widow</span>
                            </div>
                            <div className='cast'>
                            <img src='img/cris.jpg' alt=''/>
                            <p>Chris Hemsworth</p>
                            <span>Thor Odinson</span>
                            </div>
                            <div className='cast'>
                            <img src='img/rovert.jpg' alt=''/>
                            <p>Robert Downey Jr.</p>
                            <span>Tony Stark / Iron Man</span>
                            </div>
                            <div className='cast'>
                            <img src='img/rovert.jpg' alt=''/>
                            <p>Robert Downey Jr.</p>
                            <span>Tony Stark / Iron Man</span>
                            </div>
                    </div>
                    <div id='information'>
                        <p className='menuname'>InforMation</p>
                    <table>
                    <tr>
                            <th>Title</th>
                            <td>어벤져스</td>
                        </tr>   <tr>
                            <th>관객수</th>
                            <td>1,234,232</td>
                        </tr>
                        <tr>
                            <th>개봉</th>
                            <td>2012.04.26</td>
                        </tr>
                        <tr>
                            <th>등급</th>
                            <td>12세 관람가</td>
                        </tr>
                        <tr>
                            <th>장르</th>
                            <td>액션,SF,모험</td>
                        </tr>
                        <tr>
                            <th>국가</th>
                            <td>미국</td>
                        </tr>
                        <tr>
                            <th>러닝타임</th>
                            <td>142분</td>
                        </tr>
                        <tr>
                            <th>배급</th>
                            <td>소니픽쳐스</td>
                        </tr>
                    </table>
                    <p className='menuname'>summary</p>
                    <p id='summary'>
                    지구의 안보가 위협당하는 위기의 상황에서 슈퍼히어로들을 불러모아 세상을 구하는, 
                    일명 [어벤져스] 작전. 에너지원 ‘큐브’를 이용한 적의 등장으로 인류가 위험에 
                    처하자 국제평화유지기구인 쉴드 (S.H.I.E.L.D)의 국장 닉 퓨리(사무엘 L.잭슨)는 
                    [어벤져스] 작전을 위해 전 세계에 흩어져 있던 슈퍼히어로들을 찾아나선다. 
                    아이언맨(로버트 다우니 주니어)부터 토르(크리스 헴스워스), 헐크(마크 러팔로), 
                    캡틴 아메리카(크리스 에반스)는 물론, 쉴드의 요원인 블랙 위도우(스칼렛 요한슨), 
                    호크 아이(제레미 레너)까지, 최고의 슈퍼히어로들이 [어벤져스]의 멤버로 모이게 
                    되지만, 각기 개성이 강한 이들의 만남은 예상치 못한 방향으로 흘러가는데… 지구의
                     운명을 건 거대한 전쟁 앞에 [어벤져스] 작전은 성공할 수 있을까?
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovie;