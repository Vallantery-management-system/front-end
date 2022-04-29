import facebook from './facebook-icon.png'
import instagram from './instagram-icon.png'
import twitter from './twitter-icon.png'
import youtube from './youtube-icon.png'
import {Link} from 'react-router-dom'


import React from 'react'
import './footer.css'

function footer() {
    return (
        <div align = 'center' class = {'footer-container'}>
            <h4>Contacts</h4>
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
            <h4>© all rights reserved</h4>
            <p className = 'split-lines'>|</p>
            <h4> FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            <p className = 'split-lines'>|</p>
            <Link to = '/privacy'><h4> Privacy policy</h4></Link>
            </div>

            
        </div>
    )
}

export default footer
