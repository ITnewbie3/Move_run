import React from 'react';
import './style.css'

const DetailMovie = () => {
    return (
        <div id='detail'>
            <div id='imgdiv'>
                <img src='img/aven.jpg' alt=''/>
                <img src='img/aven.jpg' alt=''/>
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
                        <p>InforMation</p>
                    <table>
                        <tr>
                            <td>개봉</td>
                            <td>2012.04.26</td>
                        </tr>
                        <tr>
                            <td>등급</td>
                            <td>12세 관람가</td>
                        </tr>
                        <tr>
                            <td>장르</td>
                            <td>액션,SF,모험</td>
                        </tr>
                        <tr>
                            <td>국가</td>
                            <td>미국</td>
                        </tr>
                        <tr>
                            <td>러닝타임</td>
                            <td>142분</td>
                        </tr>
                        <tr>
                            <td>배급</td>
                            <td>소니픽쳐스</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovie;