import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom';
import Logo from '../components/Navbar/logo-colored.svg'
import '../styles/Login.css';
import axios from 'axios'

const BACKEND_URL = 'https://vms-ayb.herokuapp.com'

const userLoginRequest = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/login`, {email, password})

        if(response.data.isNotVerified) {
            alert('Please verify your email')
            return;
        }
        const access_token = response.data.access_token

        localStorage.setItem('token', access_token)

        return true
    } catch (e) {
        return false
    }
}

export const Login = () => {
    const history = useHistory();
    const [login, setLogin] = useState("");
    const [passw, setPassw] = useState("");
    const [wrong, setWrong] = useState(false);

    const LogIn = async (event) => {
        event.preventDefault();
        if (login !== "" && passw !== "") {
            const isLoggedInSuccess = await userLoginRequest(login, passw)

            if (isLoggedInSuccess) {
                history.push('/home');
            }

            if (!isLoggedInSuccess) {
                console.error("Wrong username or password");
                setWrong(true);
                setLogin("");
                setPassw("");
            }
        }
    }

    return (
        <div>
            <img className='img' src={Logo} alt=''/>
            <div className='r1'></div>
            <div className='r2'></div>
            <div className='r3'></div>
            <div className='r4'></div>
            <div className='r5'></div>
            <div className='r6'></div>
            <div className='div1'>
                <h2>Sign In</h2>
                <form onSubmit={LogIn}>
                    <input className = 'main-input' required type="mail" placeholder='Username' value={login} onChange={(e) => {
                        setLogin(e.target.value);
                    }}/>
                    <input className = 'main-input' required type="password" placeholder='Password' value={passw} onChange={(e) => {
                        setPassw(e.target.value);
                    }}/>
                    {wrong && <p id='wrong'>Wrong username or password</p>}
                    <Link to='/forgot' id='forgot'>Forgot password?</Link>
                    <button className='buttons' type="submit">Continue</button>
                </form>
                <p className='signup'>New User? <Link to='/signup' id='signup'>Sign up</Link></p>
            </div>
            <p className='copyright'>Copyright Ⓒ 2022 VMS. All rights deserved</p>
        </div>
    )
}
