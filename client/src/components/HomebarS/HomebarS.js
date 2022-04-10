import React from 'react'
import './HomebarS.css'

const Homebar = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Welcome.png')} width="50px"/>
                    <button className='click-items'>Welcome</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Current Courses.png')} width="50px"/>
                    <button className='click-items'>Current Courses</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Announcements.png')} width="50px"/>
                    <button className='click-items'>Announcements</button>
                </li>
                <li className='item'>
                    <img src={require('../../images/Calendar.png')} width="50px"/>
                    <button className='click-items'>Calendar</button>
                </li>
            </ul>
        </div>
    )
}

export default Homebar