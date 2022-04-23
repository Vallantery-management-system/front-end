import React from 'react'
import './pricing.css'

function pricing() {
    return (
        <div className = {'pricing-container'}>
            <div className ={'free'} align ='center'>
                <h1>Free</h1>
                <h3 className ={'card-text'}> This package is perfect 
                     for testing all our features
                     and inviting up to 10 volunteers
                     to your event.</h3>
                <h1>  $ 0.00</h1>
                <button className ={'button-shape green'}>Select</button>
            </div>
            <div className ={'pro'} align ='center'>
                <h1>Pro</h1>
                <h3 className ={'card-text'}> This package is perfect 
                     for hosting medium-sized events
                     and inviting up to 20 volunteers
                     to your event.</h3>
                <h1>  $ 10.00</h1>
                <button className ={'button-shape cyan'}>Select</button>
            </div>
            <div className ={'pro-plus'} align ='center'>
                <h1>Business</h1>
                <h3 className ={'card-text'}> This package is perfect 
                     for organizing Large-scale events
                     and inviting up to 30 volunteers
                     to your event.</h3>
                <h1>  $ 32.00</h1>
                <button className ={'button-shape blue'}>Select</button>
                <h4></h4>
            </div>
        </div>
    )
}

export default pricing
