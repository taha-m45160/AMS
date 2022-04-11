import React from 'react'
import './SidebarT.css'

const SidebarT = () => {
    const ccode = sessionStorage.getItem("ccode")

    const makeUrl = (cc, page) => {
        return "/teacher/courses/"+cc+"/"+page
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Resources.png')}/>
                    <a href={makeUrl(ccode, "overview")}>Outline</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Resources.png')}/>
                    <a href={makeUrl(ccode, "resources")}>Resources</a>
                </li>
                <li className='item'>
                <img src={require('../../images/Quizzes.png')}/>
                    <a href={makeUrl(ccode, "quizzes")}>Quizzes</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Assignments.png')}/>
                    <a href={makeUrl(ccode, "assignments")}>Assignments</a>
                </li>
                <li className='item'>
                    <img src={require('../../images/Gradebook.png')}/>
                    <a href={makeUrl(ccode, "gradebook")}>Gradebook</a>
                </li>
            </ul>
        </div>
    )
}

export default SidebarT