import React from 'react'
import './HomebarA.css'

const HomebarA = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Change Password.png')} width="50px"/>
                    <a href="CHANGE-PASSWORD">Change Password</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Create Course.png')} width="50px"/>
                    <a href="CREATE-COURSE">Create Course</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Register Account.png')} width="50px"/>
                    <a href="REGISTER-ACCOUNT">Register Account</a>
                </li>
            </ul>
        </div>
    )
}

export default HomebarA