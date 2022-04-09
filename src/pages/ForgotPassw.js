import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import './ForgotPassw.css';

//TODO make a request with email to backend endpoint POST:/auth/forgot

export const ForgotPassw = () => {

  const BACKEND_URL = 'https://vms-ayb.herokuapp.com'
  const ForgotPasswordRequest = async (email) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/forgot`, {email})
        const access_token = response.data.access_token
        localStorage.setItem('token', access_token)

        return true
    } catch (e) {
        return true
    }
}

    const history = useHistory();
    const [email, setEmail] = useState("");

    const ResetPassword = async (e) => {
        e.preventDefault();
            const forgotSuccess = await ForgotPasswordRequest(email);

            if (forgotSuccess) {
                history.push('/reset');
            }
            if (!forgotSuccess) {
                console.error("Wrong email");
            }
    }

    return (
        <div>
          <img className='img' src='/Images/Capture.jpg' alt=''/>
          <div className='r1'></div>
          <div className='r2'></div>
          <div className='r3'></div>
          <div className='r4'></div>
          <div className='r5'></div>
          <div className='r6'></div>
          <div className='div2'>
            <h2>Forgot Password?</h2>
            <form onSubmit = {ResetPassword} >
                <input required type = "mail" id = 'input 1' placeholder = 'Email' value = {email} onChange = {(e) => {
                setEmail(e.target.value);
                } }/>
                <button className='button2' type = "submit">Continue</button>
            </form>
          </div>
        </div>
    )
}
