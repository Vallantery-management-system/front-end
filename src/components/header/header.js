import React from 'react';
import cLogo from './colored-logo.svg';
import './cLogo.css';
import avatar from './profpic.png'

function Header() {
    return (
        <div>
            <div className = 'small-navbar'>
                <img className ={'logo'} src ={cLogo}></img>
                <img className ={'logo av'} src ={avatar}></img>
            </div>
                      
        </div>
        
    )
}

export default Header
