import React, { useState } from 'react';
import './Signup.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

//TODO implement request fot sign up
// endpoint POST:/auth/signup

const BACKEND_URL = 'https://vms-ayb.herokuapp.com'
const userSignupRequest = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/signup`, {email, password})
        const access_token = response.data.access_token
        localStorage.setItem('token', access_token)
        return true
    } catch (e) {
        return false
    }
}

export const SignUp = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [city, setCity] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();


    const Signup = async (event) => {
            event.preventDefault();
            const isSignedupSuccess = await userSignupRequest(email, password);
            if (isSignedupSuccess) {
                history.push('/profile');
            }
            if (!isSignedupSuccess) {
                console.error("Something went wrong");
            }
    }

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
            <form onSubmit = {Signup}>
                <input required className = 'input' value = {name} id='input1' type='text' placeholder='Name' onChange={(e) => {
                    setName(e.target.value);
                }}/>
                <input required className = 'input' value = {surname} id='input2' type='text' placeholder='Surname'onChange={(e) => {
                    setSurname(e.target.value);
                }}/>
                <input required className = 'input' value = {phone} id='input3' placeholder='Phone +374' onChange={(e) => {
                    setPhone(e.target.value);
                }}/>
                <input required className = 'input' value = {email} id='input4' type='email' placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <input required className = 'input' value = {password} id='input5' type='password' placeholder='Password' onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <select name="City" value = {city} className = 'input' id = 'input6'required onChange={(e) => {
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
    )
}
