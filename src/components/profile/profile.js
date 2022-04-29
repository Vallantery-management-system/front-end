import React from 'react';
import "./profile.css";
import image from './profiiepic.png';
import telegram from './telegram.svg';
import {Link} from 'react-router-dom';



function profile() {
    return (
        <div>
            <div className ={'profile-wrapper'}>
                <div className={'profile-part-1'}>
                    <img className = 'profile-pic' src = {image}></img>
                    <div className = 'description-part'>
                        <div align ='left'>
                            <p className ='name-text'>Struk surname</p>
                            <h4>Male</h4>
                        </div>
                        <div align ='left'>
                            <p className = 'personal-info'>18 years old</p>
                            <p className = 'personal-info'>Kentron, Yerevan</p>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        <button className = {'button-blue'}>Approve</button>
                        <button className = {'buttone'}>Decline</button>
                    </div>
                    
                </div>
                <div align = 'center' className={'profile-part-2'}>
                    <p className ='name-text'>Contacts</p>
                    <br></br>
                    <br></br>
                    <p className = 'personal-info'>Tel: +37499 123456</p>
                    <p className = 'personal-info'>E-mail: anunazganun@...</p>
                    <br></br>
                    <button className = 'sm-button one'>Telegram</button><br></br>
                    <button className = 'sm-button'>Messenger</button>
                </div>
            </div>
        </div>
    )
}

export default profile
