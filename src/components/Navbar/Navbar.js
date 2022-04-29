import logo from "./logo.svg";
import colored from './logo-colored.svg';
import React, {useState} from 'react';
import "./Navbar.css";
import { useEffect } from "react";
import {useHistory, Link} from 'react-router-dom';

function Navbar() {
const [navbar, setnavbar] = useState(false);

const changeBackground = (e) =>{
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

    if(winScroll > 500){
        setnavbar(true);
    }
    else
    {
        setnavbar(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeBackground );
}, [])
window.addEventListener('scroll', changeBackground );

    return (
        <div>
            <div className={navbar ? 'Navbar-white': 'Navbar'}>
                <img alt = 'Logo' src ={ navbar ? colored : logo} className = {'logo'}></img>
                <div className ={'button-group'}>  
                    <button className = {'button-white'}> Language</button>
                    <Link className = 'button-text' to = '/signup'> <button className = {'buttone-blue-signup'}>Sign up</button></Link>
                    <Link className = 'button-text' to = '/login'><button className = {'button-white'}>Sign in  </button></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar
