import React from 'react';
import Header from '../include/Header';
import './style.css'


const InsertMovie = () => {
    return (

        <div id='insertdiv'style={{backgroundImage: 'url(/img/back.jpg)'}}>
            <Header/>
            <form id='insertform'>
                <table>
                <tr>
                    <th>제목</th>
                    <td><input type='text'/></td>
                </tr>
                <tr>
                    <th>관객수</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>개봉일</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>등급</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>장르</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>국가</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>러닝타임</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>배급</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>내용</th>
                    <td><input type='text'/></td>
                </tr>                <tr>
                    <th>img</th>
                    <td><input type='file'/></td>
                </tr>
                <tr>
                    <th>cast</th>
                    <td><input type='file'/></td>
                </tr>
                <tr>
                   <td colSpan={2}> <input type='text' placeholder=',로 구분해 이름을 입력해주세요'/></td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default InsertMovie;