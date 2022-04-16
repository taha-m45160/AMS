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
        <div className = "title" align="center"> 
            <h1 className="display-2">Academic Management System</h1>
            <h2 className='display-5'> Welcome to AMS! Your own platform to effectively manage your academics</h2>
        </div>

        <div>
        <div className="main">
            <p className="sign" align="center">Log in</p>
            <form className="form1" onSubmit={login}>
                <input className="un " type="text" align="center" placeholder="user ID" onChange={userIDChange} value={userID}/>
                <input className="pass" type="password" align="center" placeholder="password" onChange={passwordChange} value={Pw}/>
                <button className="submit" align="center" onSubmit={login}>Login in</button>
            </form>
            <br />
            <h5 className='text-center text-danger'>{errMsg}</h5>                    
        </div>
            
        </div>
    </div>
     );
}

export default Login;