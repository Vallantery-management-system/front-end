import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    const [login, setLogin] = useState("");
    const [passw, setPassw] = useState("");
    const navigate = useNavigate();
    const users = [
      {
        username: "12345",
        password: "qwerty",
        id: 1
      },
      {
        username: "abcde",
        password: "barev",
        id: 2
      },
      {
        username: "ok",
        password: "ok",
        id: 3
      }
    ];
    const LogIn = (event) => {
        event.preventDefault();
            const num = users.filter((user) => {
                return user.username === login && user.password === passw;
            });
            if(num.length === 0){
            console.error("Wrong username or password");
            } else {
            navigate("/profile");
            }
        }

    return (
        <div>
            <form onSubmit={LogIn}>
                <input required type = "mail" placeholder = 'Login' value = {login} onChange = {(e) => {
                setLogin(e.target.value);
                }}></input>
                <input required type = "password" placeholder = 'Password' value = {passw} onChange= {(e) => {
                setPassw(e.target.value);
                }}></input>
                <button type = "submit">Submit</button>
            </form>
       </div>
    )
}
