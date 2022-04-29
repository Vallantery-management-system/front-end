import React from 'react';
import cLogo from './colored-logo.svg';
import './cLogo.css';
import avatar from './profpic.png'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div>
            <div className = 'small-header'>
                <Link to  ='/home'>
                <img alt = 'logo' className ={'logo'} src ={cLogo}></img>
                </Link>
                <Link to ='/profile'>
                <img alt = 'logo' className ={'logo av'} src ={avatar}></img>
                </Link>
            </div>
                      
        </div>
        
    )
}

export default Header
