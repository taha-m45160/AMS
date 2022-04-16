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

    return(
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <People className='icon'></People>
                    <a className='click-items' onClick={goToUsers}>Users</a>
                </li>
                <li className='item'>
                    <MenuBook className='icon'></MenuBook>
                    <a className='click-items' onClick={goToCourses}>Courses</a>
                </li>
                <li className='item'>
                    <Announcement className='icon'></Announcement>
                    <a className='click-items' onClick={goToAnnouncements}>Announcements</a>
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