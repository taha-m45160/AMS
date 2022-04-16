import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Announcement, Help} from '@material-ui/icons/';
import axios from 'axios';


const Homebar = () => {

    const navigate = useNavigate();
    axios.defaults.withCredentials = true

    const goToUsers = async (ev) => {
        ev.preventDefault();
        navigate('/admin/users');
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        const res = await axios.get('http://localhost:8000/admin/courses')
        navigate('/admin/courses', {state: {
            courses: res.data.courses
        }})
    }

    const goToAnnouncements = async (ev) => {
        ev.preventDefault();
        navigate('/admin/announcements');
    }

    const goToHelp = async (ev) => {
        ev.preventDefault();
        navigate('/admin/help');
    }

    const goToCalendar = async (ev) => {
        ev.preventDefault();
        navigate('student/calendar')
    }

    return(
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <People className='icon2'></People>
                    <a className='click-items2' onClick={goToUsers}>Welcome</a>
                </li>
                <li className='item2'>
                    <MenuBook className='icon2'></MenuBook>
                    <a className='click-items2' onClick={goToCourses}>Courses</a>
                </li>
                <li className='item2'>
                    <Announcement className='icon2'></Announcement>
                    <a className='click-items2' onClick={goToAnnouncements}>Announcements</a>
                </li>
                <li className='item2'>
                    <Announcement className='icon2'></Announcement>
                    <a className='click-items2' onClick={goToCalendar}>Calendar</a>
                </li>
                <li className='item2'>
                    <Help className='icon2'></Help>
                    <a className='click-items2' onClick={goToHelp}>Help</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar