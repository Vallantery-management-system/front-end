import React from 'react'
import './Signup.css'

export const SignUp = () => {
    return (
        <div>
        <div className='form'>
        <h2 id='signUp'>Sign Up</h2>
            <form>
                <input required id='input'type='text' placeholder='Name'/>
                <input required id='input' type='text' placeholder='Surname'/>
                <input required id='input' type='email' placeholder='Email'/>
                <input required id='input' placeholder='Phone'/>
            </form>
        </div>
        </div>
    )
}