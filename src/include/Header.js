import React from 'react';
import './style.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
           <Link to='/'> Movie Run</Link>
        </div>
    );
};

export default Header;