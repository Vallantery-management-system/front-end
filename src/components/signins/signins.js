import React from 'react'
import './signins.css'
import {useHistory, Link} from 'react-router-dom';

function signins() {
    return (
        <div>
            <div align ='center' className ='flex-container'>
                <div className={'volunteer'}>
                <p className={'centered-text-1'}>If you want to help others and are a skilled 
                individual then go ahead and join to our volunteers’ group.</p>
                    <Link to = '/signup'><button id = {'inf'} className = {'buttone-blue central'} href ='#info'>Sign in as a volunteer</button></Link>
                </div>
                <div className ={'empty'}></div>
                <div className={'company'}>
                <p className={'centered-text-2'}>If you require assistance or wish to plan an event,
                    then click here and find your volunteers from our platform.</p>
                    <Link to = '/signup'><button id = {'inf'} className = {'buttone-blue central'} href ='#info'>Sign in as a company</button></Link>

                </div>
            </div>
        </div>
    )
}

export default signins
