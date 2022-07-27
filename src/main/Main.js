import React, { useEffect, useRef, useState } from 'react';
import './style.css'




const Main = () => {
    let back = document.querySelectorAll('.inbox')
    let backLeft = useRef(0);
    let divbox = useRef();
    let timer; // 마우스 hover시 정지
    useEffect(() => {
        back.forEach((back,index)=>{
            back.style.left = `${index*845}px`
        })
    },[])

        
        useEffect(() => {
    function moveDiv(Left){
            divbox.current.style.left = `${Left * 845}px`;
        }
    function startIt(){
        timer = setInterval(function(){
           backLeft.current = backLeft.current >= back.length-1 ? 0 : backLeft.current+1;
            moveDiv(backLeft.current)
            console.log(backLeft.current)
        },4000)
        function stopIt() {
            clearInterval(timer);
        }
    }
   
    startIt();
},[backLeft])
const nextimg =() => {
    backLeft.current = backLeft.current >= back.length-1 ? 0 : backLeft.current+1;
    divbox.current.style.left = `${-backLeft.current * 845}px`;
}
    return (
        <div id='topbox'>
            <div id='midbox' ref={divbox}>
            <div className='inbox' 
            style={{backgroundImage: 'url(/img/movie.gif)'}}>
    
            </div>
            <div className='inbox' 
            style={{backgroundImage: 'url(/img/movie.gif)'}}>
    
            </div><div className='inbox' 
            style={{backgroundImage: 'url(/img/movie.gif)'}}>
    
            </div><div className='inbox' 
            style={{backgroundImage: 'url(/img/movie.gif)'}}>
    
            </div><div className='inbox' 
            style={{backgroundImage: 'url(/img/movie.gif)'}}>
    
            </div>
            </div>
            <button onClick={nextimg}>next</button>
        </div>
    );
};

export default Main;