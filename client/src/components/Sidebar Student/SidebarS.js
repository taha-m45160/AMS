import React from 'react'
import './SidebarS.css'

const SidebarS = () => {
    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Outline.png')}/>
                    <a href="OUTLINE">Outline</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Resources.png')}/>
                    <a href="RESOURSES">Resourses</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Quizzes.png')}/>
                    <a href="QUIZZES">Quizzes</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Assignments.png')}/>
                    <a href="ASSIGNMENTS">Assignments</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Calendar.png')}/>
                    <a href="GRADEBOOK">Gradebook</a>
                </li>
            </ul>
        </div>
    )
}

export default SidebarS