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
                    <a href="HOME-PAGE">Welcome</a>
                </li>
                
                <li className='item'>
                    <img src={Courses} alt="Courses"/>
                    <button onClick={() => toCourses()}>Courses</button>
                </li>
                
                <li className='item'>
                    <img src={Announcements} alt="Announcements"/>
                    <a href="ANNOUNCEMENTS">Announcements</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar