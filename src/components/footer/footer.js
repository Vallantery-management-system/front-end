import facebook from './facebook-icon.png';
import React from 'react';
import instagram from './instagram-icon.png';
import twitter from './twitter-icon.png';
import youtube from './youtube-icon.png';
import {Link} from 'react-router-dom';
import { useTranslation} from "react-i18next";
import './footer.css'



export const Footer = () => {
    const { t } = useTranslation();
    

    return (
        <div align = 'center' class = {'footer-container'}>
            <h4>{t('Contacts')}</h4>
            <h4>VMS@VMS.com</h4>
            <h4>+374 00 0000 00</h4>
            <div className ={'social-media-icons'}>
                <div className={'first half'}>
                    <img alt = 'logo' className = 'icon' src = {facebook}></img>
                    <img alt = 'logo' className = 'icon' src = {instagram}></img>
                </div>
                <div>
                    <img alt = 'logo' className = 'icon' src = {twitter}></img>
                    <img alt = 'logo' className = 'icon' src = {youtube}></img>
                </div>
            </div>
            <hr></hr>
            <div className = {"contacts"}>
            <h4>{t('Rights_reserved')}</h4>
            <p className = 'split-lines'>|</p>
            <h4> {t('FAQ')} </h4>
            <p className = 'split-lines'>|</p>
            <Link to = '/privacy'><h4> {t('Privacy')}</h4></Link>
            </div>
        </div>
    )
}

