import React from 'react'
import './pricing.css'

function pricing() {
    return (
        <div className = {'pricing-container'}>
            <div className ={'free'} align ='center'>
                <p className = 'grande'>Free</p>
                <h3 className ={'card-text'}> This package is perfect 
                     for testing all our features
                     and inviting up to 10 volunteers
                     to your event.</h3>
                <p className = 'grande'>  $ 0.00</p>
                <button className ={'button-shape green'}>Select</button>
            </div>
            <div className ={'pro'} align ='center'>
                <p className = 'grande'>Pro</p>
                <h3 className ={'card-text'}> This package is perfect 
                     for hosting medium-sized events
                     and inviting up to 20 volunteers
                     to your event.</h3>
                <p className = 'grande'>  $ 10.00</p>
                <button className ={'button-shape cyan'}>Select</button>
            </div>
            <div className ={'pro-plus'} align ='center'>
                <p className = 'grande'>Business</p>
                <h3 className ={'card-text'}> This package is perfect 
                     for organizing Large-scale events
                     and inviting up to 30 volunteers
                     to your event.</h3>
                <p className = 'grande'> $32.00</p>
                <button className ={'button-shape blue'}>Select</button>
                <h4></h4>
            </div>
        </div>
    )
}

export default pricing
