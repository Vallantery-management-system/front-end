import React, { useState } from 'react';
import './Signup.css';

export const SignUp = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [city, setCity] = useState();

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
        <h2 id='signUp'>Sign Up</h2>
        <h4 id='start'>Start your journey</h4>
            <form>
                <input required className = 'input' value = {name} id='input1' type='text' placeholder='Name'/>
                <input required className = 'input' value = {surname} id='input2' type='text' placeholder='Surname'/>
                <input required className = 'input' value = {email} id='input3' type='email' placeholder='Email'/>
                <input required className = 'input' value = {phone} id='input4' placeholder='Phone +374'/>
                <select name="City" value = {city} className = 'input' required >
                    <option selected disabled hidden>City</option>
                    <option value="Yerevan">Yerevan</option>
                    <option value="Gyumri">Gyumri</option>
                    <option value="Vanadzor">Vanadzor</option>
                    <option value="Dilijan">Dilijan</option>
                </select>
                <button type='submit'className='button1'>Continue</button>
            </form>
        </div>
        </div>
    )
}