import React from 'react'
import './HomebarA.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const HomebarA = () => {

    const navigate = useNavigate();

    const changePass = (ev) => {
        ev.preventDefault();
        navigate('/admin/changePassword');
    }

    const createCourse = (ev) => {
        ev.preventDefault();
        navigate('/admin/createCourse');
    }

    const registerAccount = (ev) => {
        ev.preventDefault();
        navigate('/admin/createAccount');
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Change Password.png')} width="50px"/>
                    <button className='click-items' onClick={changePass}>Change Password</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Create Course.png')} width="50px"/>
                    <button className='click-items' onClick={createCourse}>Create Course</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Register Account.png')} width="50px"/>
                    <button className='click-items' onClick={registerAccount}>Register Account</button>
                </li>
            </ul>
        </div>
    )
}

export default HomebarA