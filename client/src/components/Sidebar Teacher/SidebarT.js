import React from 'react'
import './SidebarT.css'

const SidebarT = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Resources.png')} width="50px"/>
                    <a href="RESOURCES">Resources</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Quizzes.png')} width="50px"/>
                    <a href="QUIZZES">Quizzes</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Assignments.png')} width="50px"/>
                    <a href="ASSIGNMENTS">Assignments</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Gradebook.png')} width="50px"/>
                    <a href="GRADEBOOK">Gradebook</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Feedback.png')} width="50px"/>
                    <a href="FEEDBACK">Feedback</a>
                </li>
            </ul>
        </div>
    )
}

export default SidebarT