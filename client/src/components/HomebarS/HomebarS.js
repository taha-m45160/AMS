import React from 'react'
import './HomebarS.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Home, MenuBook, Announcement, Help} from '@material-ui/icons/';

const Homebar = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')

    const goHome = (ev) => {
        ev.preventDefault();
        navigate('/student');
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:3000/student/courses', {withCredentials: true});
            if (res.data.courses.length === 0){
                setErrMsg("Not enrolled in any course.")
            }
            else {
                navigate('student/courses', {state: {
                    courses: res.data.courses,
                    userType: 'student'
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const goToAnnouncements = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:3000/student/announcements', {withCredentials: true});
            if (res.data.announcements.length === 0){
                setErrMsg("No announcements.")
            }
            else {
                navigate('student/announcements', {state: {
                    announcements: res.data.announcements,
                    userType: 'student'
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const goToCalendar = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:3000/student/calendar', {withCredentials: true});
            if (res.data.calendar.length === 0){
                setErrMsg("No calendar.")
            }
            else {
                navigate('student/calendar', {state: {
                    calendar: res.data.calendar,
                    userType: 'student'
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const goToHelp = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:3000/student/help', {withCredentials: true});
            if (res.data.help.length === 0){
                setErrMsg("No help.")
            }
            else {
                navigate('student/help', {state: {
                    help: res.data.help,
                    userType: 'help'
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    return(
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <Home className='icon'></Home>
                    <a className='click-items' onClick={goHome}>Welcome</a>
                </li>
                <li className='item'>
                    <MenuBook className='icon'></MenuBook>
                    <a className='click-items' onClick={goToCourses}>Current Courses</a>
                </li>
                <li className='item'>
                    <Announcement className='icon'></Announcement>
                    <a className='click-items' onClick={goToAnnouncements}>Announcements</a>
                </li>
                <li className='item'>
                    <CalendarMonthIcon className='icon'></CalendarMonthIcon>
                    <a className='click-items' onClick={goToCalendar}>Calendar</a>
                </li>
                <li className='item'>
                    <Help className='icon'></Help>
                    <a className='click-items' onClick={goToHelp}>Help</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar