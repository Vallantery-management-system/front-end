import logo from "./logo.svg";
import colored from './logo-colored.svg';
import React, {useState} from 'react';
import "./Navbar.css";
import { useEffect } from "react";
import {Link} from 'react-router-dom';

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
                <img src ={ navbar ? colored : logo} className = {'logo'}></img>
                <div className ={'button-group'}>  
                <select className = {'button'} name="cars" id="cars">
                    <option value="English">Eng</option>
                    <option value="French">Fr</option>
                    <option value="Russian">Rus</option>
                    <option value="Spanish">Es</option>
                    <option value="German">Deu</option>
                    <option value="Armenian">Arm</option>
                </select>
                    <Link to='/signup'><button className = {'button-blue-signup'}>Sign up</button></Link>
                    <Link to='/login'><button className = {'button'}>  Sign in</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar
