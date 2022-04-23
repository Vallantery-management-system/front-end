import React, {useState, useEffect} from 'react'
import Header from '../components/header/header'

export const Login = () => {
    const [emailValue, setEmail] = useState(undefined)
    const [passwordValue, setPassword] = useState(undefined)


    useEffect(() => {
        if(emailValue && passwordValue) {
            alert('apres chishta ')   
        }
         
    }, [passwordValue, emailValue])


    const loginOnClick = () => {
        alert('login')
    }

    return (
        <div>
            <Header style={{
                backgroundColor: 'red',
            }} title="Hello Login Page"/>

            <input name='email' value={emailValue} onChange={(e) => setEmail(e.target.value)}/>
            <input name='password' value={passwordValue} onChange={(e) => setPassword(e.target.value)}/>


            {passwordValue}
            {emailValue}


            <button onClick={loginOnClick}>Login</button>
       </div>
    )
}

