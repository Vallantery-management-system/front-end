import React from 'react';
import "./profile.css";
import image from './profiiepic.png';
import telegram from './telegram.svg';



function profile() {
    return (
        <div>
            <div className ={'profile-wrapper'}>
                <div className={'profile-part-1'}>
                    <img className = 'profile-pic' src = {image}></img>
                    <div className = 'description-part'>
                        <div>
                            <p className ='name-text'>Struk surname</p>
                            <h4>Male</h4>
                        </div>
                        <div>
                            <h2>18 years old</h2>
                            <h2>Kentron, Yerevan</h2>
                        </div>
                        <button className = {'button-blue'}>Approve</button>
                        <button className = {'button'}>Decline</button>
                    </div>
                    
                </div>
                <div align = 'center' className={'profile-part-2'}>
                    <p className ='name-text'>Contacts</p>
                    <h2>Tel: +37499 123456</h2>
                    <h2>E-mail: anunazganun@...</h2>
                    <button className = 'sm-button one'>Telegram</button><br></br>
                    <button className = 'sm-button'>Messenger</button>
                </div>
            </div>
        </div>
    )
}

export default profile
