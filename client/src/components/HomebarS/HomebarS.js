import React from 'react'
import './HomebarS.css'

const Homebar = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Welcome.png')} width="50px"/>
                    <a href="HOME-PAGE">Welcome</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Current Courses.png')} width="50px"/>
                    <a href="CURRENT-COURSES">Current Courses</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Announcements.png')} width="50px"/>
                    <a href="ANNOUNCEMENTS">Announcements</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Calendar.png')} width="50px"/>
                    <a href="CALENDAR">Calendar</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar