import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import './ForgotPassw.css';

//TODO make a request to the backend to checkng the password
//if success redirect to login page
// endpoint POST:/auth/reset

  const BACKEND_URL = 'https://vms-ayb.herokuapp.com'
    const ResetPasswordRequest = async () => {
      try {
          const response = await axios.post(`${BACKEND_URL}/auth/reset`)
          const access_token = response.data.access_token
          localStorage.setItem('token', access_token)

          return true
      } catch (e) {
          return true
      }
  }

export const ResetPassword = () => {

    const history = useHistory();
    const [newpassw, setNewpassw] = useState("");
    const [confirm, setConfirm] = useState("");


    const ResetPassword = async (e) => {
        e.preventDefault();
        const resetSuccess = await ResetPasswordRequest();

        if (resetSuccess) {
            history.push('/login');
        }
        if (!resetSuccess) {
            console.error("Something went wrong");
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
            <h2>Reset Password</h2>
            <form onSubmit = {ResetPassword} >
                <input required type = "New Password"  id = 'input 3' placeholder = 'New Password' value = {newpassw} onChange= {(e) => {
                setNewpassw(e.target.value);
                }}/>
                 <input required type = "Confirm"  id = 'input 3' placeholder = 'Confirm New Password' value = {confirm} onChange= {(e) => {
                setConfirm(e.target.value);
                }}/>
                <button className='button2' type = "submit">Continue</button>
            </form>
          </div>
        </div>
    )
}
