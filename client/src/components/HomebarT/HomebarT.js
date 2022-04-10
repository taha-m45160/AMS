import React from 'react'
import {useNavigate} from 'react-router-dom';
import './HomebarT.css'
import Welcome from '../../images/Welcome.png'
import Courses from '../../images/Current Courses.png'
import Announcements from '../../images/Announcements.png'


const Homebar = () => {
    const navigate = useNavigate();

    const toCourses = () => {
        navigate(`/teacher/courses`)
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={Welcome} alt="Welcome"/>
                    <button className='click-items'>Welcome</button>
                </li>
                
                <li className='item'>
                    <img src={Courses} alt="Courses"/>
                    <button className='click-items'>Courses</button>
                </li>
                
                <li className='item'>
                    <img src={Announcements} alt="Announcements"/>
                    <button className='click-items'>Announcements</button>
                </li>
            </ul>
        </div>
    )
}

export default Homebar