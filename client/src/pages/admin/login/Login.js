import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'
const axios = require('axios')

const Login = () => {
    const navigate = useNavigate();

    const [userID, setUserID] = React.useState(``)
    const [Pw, setPw] = React.useState(``)
    const [errMsg, setErrMsg] = React.useState('')

    const login = async (ev) => {
        ev.preventDefault()
        if(userID && Pw){
            const info = {
                id : userID,
                password : Pw
            }
            try{
                const res = await axios.post('http://localhost:8000/login', info, {withCredentials: true});
                navigate(`/${res.data.userType}/Home`)
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
    <div className="container"> 
        <div className="box-1">
            <h1>Academics Management System </h1>
        </div>
        <div className = "p-box"></div>
        <div className = "texxt"> 
            <h3> Welcome to AMS! Your own platform to effectively manage your academics </h3>
        </div>


        <form className="my-form" onSubmit={login}> 
            <div className = "form-group">
                <label> UserID: </label>
                <input type="text" name="UserID" onChange={userIDChange}></input>
            </div>
            <div className = "form-group">
                <label> Password: </label>
                <input type = "password" name = "Password" onChange={passwordChange}></input>
            </div>
            <input className = "button" type = "submit" value = "Login" name = ""></input>
        </form>
        <h5 className='text-center text-danger'>{errMsg}</h5>
    </div>
     );
}

export default Login;