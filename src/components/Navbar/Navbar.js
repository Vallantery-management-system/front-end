import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation} from "react-i18next";
import React, {useState, useEffect } from 'react';

import "./Navbar.css";
import logo from "./logo.svg";
import colored from './logo-colored.svg';


function Navbar() {
    const { t } = useTranslation();
    const [navbar, setnavbar] = useState(false);

    const ChangeLanguage = () =>{
        var language = document.getElementById('languageChoice');
        var langValue = language.value;
        document.querySelector('html').lang = langValue;
        i18next.changeLanguage(langValue);
    }

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
                <img alt = 'Logo' src ={ navbar ? colored : logo} className = {'logo'} />
                <div className ={'button-group'}>
                    <select id="languageChoice" onChange = {ChangeLanguage} className ='button-white'>
                        <option value="am"selected="selected">Հայերեն</option>
                        <option value="en" >English</option>
                        <option value="de">Deutsche</option>
                        <option value="fr">Francaís</option>
                        <option value="ru">Русский</option>
                        <option value="es">Español</option>
                        <option value="vms">VMS</option>

                    </select>

                    <Link className = 'button-text' to = '/signup'>
                        <button className = {'buttone-blue-signup'}>{t('Sign_up')}</button>
                    </Link>
                    <Link className = 'button-text' to = '/login'>
                        <button className = {'button-white'}>{t('Sign_in')}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
