import React from 'react'
import './SidebarS.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const SidebarS = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Resources.png')}/>
                    <a href="OUTLINE">Outline</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Resources.png')}/>
                    <a href="/teacher/courses/CS-300/resources">Resources</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Quizzes.png')}/>
                    <a href="/teacher/courses/CS-300/quizzes">Quizzes</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Assignments.png')}/>
                    <a href="/teacher/courses/CS-300/assignments">Assignments</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Gradebook.png')}/>
                    <a href="/teacher/courses/CS-300/gradebook">Gradebook</a>
                </li>
            </ul>
        </div>
    )
}

export default SidebarS