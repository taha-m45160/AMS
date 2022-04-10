import React from 'react'
import './HomebarA.css'

const HomebarA = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Change Password.png')} width="50px"/>
                    <button className='click-items'>Change Password</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Create Course.png')} width="50px"/>
                    <button className='click-items'>Create Course</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Register Account.png')} width="50px"/>
                    <button className='click-items'>Register Account</button>
                </li>
            </ul>
        </div>
    )
}

export default HomebarA