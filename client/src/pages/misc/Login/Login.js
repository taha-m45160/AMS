import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import Navbar from '../../../components/Navbar/Navbar'
const axios = require('axios')

async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
}

const Login = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true; 
    const [userID, setUserID] = React.useState(``)
    const [Pw, setPw] = React.useState(``)
    const [errMsg, setErrMsg] = React.useState('')

    const login = async (ev) => {
        ev.preventDefault()
        let password = await hash(Pw)
        if(userID && Pw){
            const info = {
                ID : userID,
                password : password
            }
            try{
                const res = await axios.post('http://localhost:8000/login', info);
                navigate(`/${res.data.role}/`)
            } catch (err) {
                setErrMsg('User ID or password is incorrect')
            }
            setPw('')
            setUserID('')
        } else {
            setErrMsg('Please enter user ID and password')
        }
    }

    const userIDChange = (ev) => {
        setUserID(ev.target.value)
    }

    const passwordChange = (ev) => {
        setPw(ev.target.value)
    }

    return (
    <div> 
        <div className='nav'>
            <div className='nav-container'>
            <img className='AMS-icon' src={require('../../../images/AMS.png')}></img>
            </div>
        </div>
        <div className = "p-box"></div>
        <div className = "texxt"> 
            <h2> Welcome to AMS! Your own platform to effectively manage your academics </h2>
        </div>


        <form className="my-form" onSubmit={login}> 
            <div className = "form-group">
                <label> UserID: </label>
                <input type="text" name="UserID" onChange={userIDChange} value={userID}></input>
            </div>
            <div className = "form-group">
                <label> Password: </label>
                <input type = "password" name = "Password" onChange={passwordChange} value={Pw}></input>
            </div>
            <input className = "button" type = "submit" value = "Login" name = ""></input>
        </form>
        <h5 className='text-center text-danger'>{errMsg}</h5>
    </div>
     );
}

export default Login;