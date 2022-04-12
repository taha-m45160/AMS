import React from 'react'
import './HomebarS.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Homebar = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')

    const welcomeBack = (ev) => {
        ev.preventDefault();
        navigate('/student')
    }

    const viewCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.courses.length === 0){
                setErrMsg("No course");
            }
            else{
                navigate('/student/courses', {state: {
                    courses: res.data.courses,
                    userType: "student"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const viewAnnouncemnets = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.announcements.length === 0){
                setErrMsg("No announcements");
            }
            else{
                navigate('/student/announcements', {state: {
                    announcements: res.data.announcements,
                    userType: "student"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const viewCalendar = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.calendar.length === 0){
                setErrMsg("No calendar");
            }
            else{
                navigate('/student/calendar', {state: {
                    calendar: res.data.calendar,
                    userType: "student"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Welcome.png')} width="50px"/>
                    <button className='click-items' onClick={welcomeBack}>Welcome</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Current Courses.png')} width="50px"/>
                    <button className='click-items' onClick={viewCourses}>Current Courses</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Announcements.png')} width="50px"/>
                    <button className='click-items' onClick={viewAnnouncemnets}>Announcements</button>
                </li>
                <li className='item'>
                    <img src={require('../../images/Calendar.png')} width="50px"/>
                    <button className='click-items' onClick={viewCalendar}>Calendar</button>
                </li>
            </ul>
        </div>
    )
}

export default Homebar