import React from 'react'
import './HomebarP.css'

const Homebar = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Announcements.png')}/>
                    <a href="ANNOUNCEMENTS">Announcements</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Gradebook.png')}/>
                    <a href="GRADEBOOK">Gradebook</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Request Meeting.png')}/>
                    <a href="REQUEST MEETING">Request Meeting</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar