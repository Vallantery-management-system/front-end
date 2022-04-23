import facebook from './facebook-icon.png'
import instagram from './instagram-icon.png'
import twitter from './twitter-icon.png'
import youtube from './youtube-icon.png'



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
                    <img className = 'icon' src = {facebook}></img>
                    <img className = 'icon' src = {instagram}></img>
                </div>
                <div>
                    <img className = 'icon' src = {twitter}></img>
                    <img className = 'icon' src = {youtube}></img>
                </div>
            </div>
            <hr></hr>
            <div className = {"contacts"}>
            <h4>© all rights reserved</h4>
            <h2>|</h2>
            <h4> FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            <h2>|</h2>
            <h4> Privacy policy</h4>
            </div>

            
        </div>
    )
}

export default footer
