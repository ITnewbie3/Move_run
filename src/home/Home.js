import React, { useEffect } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    useEffect(() => {
      function startup(){
        document.querySelector('.home').classList.add('on')
    }
    window.addEventListener("load",() => setTimeout(startup()),4000)
},[])

const navigate = useNavigate();
useEffect(()=>{
    let timer = setTimeout(()=>{ navigate(`/main`);   }, 5000);
  });
    return (
        <div className='home'>
            <div className='over'>
            <p>Movie Run</p>
            </div>
        </div>
    );
};

export default Home;