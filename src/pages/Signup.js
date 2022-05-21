import React, { useState } from 'react';
import '../styles/Signup.css';
import axios from "axios";
import Logo from '../components/Navbar/logo-colored.svg'
import { useTranslation} from "react-i18next";
import {Link} from 'react-router-dom'

// endpoint POST:/auth/signup


const BACKEND_URL = 'https://vms-ayb.herokuapp.com'
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?~]/;
const numbersChars = /0123456789/;

function onlySpaces(name) {
    return name.indexOf(' ') >= 0;
    
}

const nameCheckup = () => {
    var checkName = document.getElementById('name').value;
    var minNameLenght = checkName.length;
    //requirements for name
    if (minNameLenght<3 || onlySpaces(checkName)) {
        alert("The name must be longer than 3 characters and not include spaces. Please make sure to input a valid name");
        return false;
    }
    else{
        console.log('=======login pass');
        return true
    }
}

const surnameCheckup = () => {
    var checkSurname = document.getElementById('surname').value;
    var minSurLenght = checkSurname.length;
    //requirements for last name
    if (onlySpaces(checkSurname) || minSurLenght<3) {
        alert("The Surname must be longer than 3 characters and not include spaces. Please make sure to input a valid Surname");
        return false;
    }
    else{
        console.log('======Surname pass')
        return true;

    }

}

const mailCheckup = () =>{
    var checkEmail = document.getElementById('email').value;
    // check for @ sign
    var atSymbol = checkEmail.indexOf("@");
    if(atSymbol < 1) {
        alert("The email must contain '@'. Please make sure to input a valid email adress.")
        return false;
    }  
    var dot = checkEmail.indexOf(".");
    if(dot <= atSymbol + 2) {
        alert("The email either does not contain '.' or its location is invalid. Please make sure to input a valid email adress.")
        return false;
    
    }  
    // check that the dot is not at the end
    if (dot === checkEmail.length - 1) {
        return false
        
    }
    else{
        console.log('=======email pass');
        return true;
    }

}

const passwordCheckup = () =>{
    var checkPassword = document.getElementById('password').value;
    if(!specialChars.test(checkPassword)){
        alert('password is too weak. Try to include symbols like !@#$%^&*?>|');
        return false;
    }
    if(!/\d/.test(checkPassword)){
        alert('Password is too weak. Try to include numbers');
        return false;

    }
    if (checkPassword === checkPassword.toLowerCase()) {
        alert( this.$t('Password is too weak. Try to include UPPERCASE letters'));
    }

    else{
        alert('=======password pass');
        return true;
    }

}


const Checkup = () => {
    if(nameCheckup() && surnameCheckup() && mailCheckup() && passwordCheckup()) console.log('=====success')   
}


const validateSignUpData = (data) => {
    return true

}


export const SignUp = () => {
    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const userSignupRequest = async () => {
        try { 
            const data = {name, surname, email, phone, city, password}
            if(!validateSignUpData(data)) {
                setErrors('Invalid Data')   
                return;
            }

            await axios.post('/auth/signup', data, {
                baseURL: BACKEND_URL
            })

            alert('Welcome to the VMS systems, to keep using our system please verify your email.')
        }catch (err) {

        }
    }

    return (
        <div>
        <img className='img' src={Logo} alt=''/>
        <div>
            <div id='r1'></div>
            <div id='r2'></div>
            <div id='r3'></div>
        </div>
        <div>
            <div id='r4'></div>
            <div id='r5'></div>
            <div id='r6'></div>
        </div>
        <div className='form'>
            <div>
                <h2 id='signUp'>{t('Sign_up')}</h2>
                <h4 id='start'>{t("Start_journey")}</h4>
            </div>
            <div className = 'input-div'>
                <form onSubmit = {userSignupRequest} >
                    <input className='input-field'  id = 'name' required value = {name} type='text' placeholder={t('Name')} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                    <input className='input-field'  id = 'surname' required value = {surname} type='text' placeholder={t('Surname')} onChange={(e) => {
                        setSurname(e.target.value);
                    }}/>
                    <input className='input-field'  id = 'phone' required value = {phone} placeholder={t('Phone')} type="number" onChange={(e) => {
                        setPhone(e.target.value);
                    }}/>
                    <input className='input-field'  id = 'email' required value = {email} type='email' placeholder={t('Email')} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <input className='input-field'  id = 'password'required value = {password} type='password' placeholder={t('Password')} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <select className = 'select-field' name="City" value = {t('city')} required onChange={(e) => {
                        setCity(e.target.value);
                    }}>
                        <option selected disabled hidden>City</option>
                        <option value="Yerevan">Yerevan</option>
                        <option value="Gyumri">Gyumri</option>
                        <option value="Vanadzor">Vanadzor</option>
                        <option value="Dilijan">Dilijan</option>
                        <option value="Chambarak">Chambarak</option>
                    </select>
                    <Link to = '/home'>
                        <button type='submit' className='button1' onClick = {Checkup}>{t("Continue")}</button>
                    </Link>
                </form>
            </div>
        </div>
        </div>
    )
}
