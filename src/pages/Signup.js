import React, { useState } from 'react';
import '../styles/Signup.css';

//TODO implement request fot sign up
// endpoint POST:/auth/signup

export const SignUp = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [city, setCity] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
        <img className='img' src='/Images/Capture.jpg' alt=''/>
        <div id='r1'></div>
        <div id='r2'></div>
        <div id='r3'></div>
        <div id='r4'></div>
        <div id='r5'></div>
        <div id='r6'></div>
        <div className='form'>
            <div>
                <h2 id='signUp'>Sign Up</h2>
                <h4 id='start'>Start your journey</h4>
            </div>
            <div className = 'input-div'>
                <form /*onSubmit = {Submit}*/>
                    <input required value = {name} type='text' placeholder='Name' onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                    <input required value = {surname} type='text' placeholder='Surname'onChange={(e) => {
                        setSurname(e.target.value);
                    }}/>
                    <input required value = {phone} placeholder='Phone +374' onChange={(e) => {
                        setPhone(e.target.value);
                    }}/>
                    <input required value = {email} type='email' placeholder='Email' onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <input required value = {password} type='password' placeholder='Password' onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <select name="City" value = {city} required onChange={(e) => {
                        setCity(e.target.value);
                    }}>
                        <option selected disabled hidden>City</option>
                        <option value="Yerevan">Yerevan</option>
                        <option value="Gyumri">Gyumri</option>
                        <option value="Vanadzor">Vanadzor</option>
                        <option value="Dilijan">Dilijan</option>
                        <option value="Chambarak">Chambarak</option>
                    </select>
                    <button type='submit'className='button1'>Continue</button>
                </form>
            </div>
        </div>
        </div>
    )
}
