import React from 'react'
import './HomebarP.css'

const Homebar = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Announcements.png')} width="50px"/>
                    <a href="ANNOUNCEMENTS">Announcements</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Gradebook.png')} width="50px"/>
                    <a href="GRADEBOOK">Gradebook</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Request Meeting.png')} width="50px"/>
                    <a href="REQUEST MEETING">Request Meeting</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar